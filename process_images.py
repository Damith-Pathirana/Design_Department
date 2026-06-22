import os
from PIL import Image, ImageDraw, ImageFilter

RAW_DIR = "raw_screenshots"
OUTPUT_DIR = "public"

def add_rounded_corners_and_shadow(img_path, output_path, radius=20, shadow_blur=30, shadow_offset=(0, 15), shadow_color=(0, 0, 0, 150)):
    # Open image
    img = Image.open(img_path).convert("RGBA")
    
    # Resize to a standard width (e.g., 1200) for uniformity, keeping aspect ratio
    target_width = 1200
    w_percent = (target_width / float(img.size[0]))
    target_height = int((float(img.size[1]) * float(w_percent)))
    img = img.resize((target_width, target_height), Image.Resampling.LANCZOS)
    
    # Create mask for rounded corners
    mask = Image.new("L", img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, target_width, target_height), radius, fill=255)
    
    # Apply rounded corners to image
    rounded_img = Image.new("RGBA", img.size)
    rounded_img.paste(img, (0, 0), mask=mask)
    
    # Create a subtle border (glassmorphism style)
    border_img = Image.new("RGBA", img.size, (0, 0, 0, 0))
    border_draw = ImageDraw.Draw(border_img)
    border_draw.rounded_rectangle((0, 0, target_width-1, target_height-1), radius, outline=(255, 255, 255, 40), width=2)
    rounded_img = Image.alpha_composite(rounded_img, border_img)

    # Calculate final canvas size to accommodate shadow
    canvas_width = target_width + (shadow_blur * 4) + abs(shadow_offset[0])
    canvas_height = target_height + (shadow_blur * 4) + abs(shadow_offset[1])
    
    # Calculate paste positions
    paste_x = (canvas_width - target_width) // 2
    paste_y = (canvas_height - target_height) // 2
    
    # Create shadow
    shadow = Image.new("RGBA", (canvas_width, canvas_height), (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    shadow_rect_x1 = paste_x + shadow_offset[0]
    shadow_rect_y1 = paste_y + shadow_offset[1]
    shadow_draw.rounded_rectangle(
        (shadow_rect_x1, shadow_rect_y1, shadow_rect_x1 + target_width, shadow_rect_y1 + target_height),
        radius, fill=shadow_color
    )
    # Blur the shadow
    shadow = shadow.filter(ImageFilter.GaussianBlur(shadow_blur))
    
    # Create dark sleek background canvas
    # Let's make it transparent so it blends perfectly into the website's dark background,
    # or a very subtle dark radial gradient
    bg = Image.new("RGBA", (canvas_width, canvas_height), (10, 10, 12, 0)) # Fully transparent canvas
    
    # Composite
    final_img = Image.alpha_composite(bg, shadow)
    final_img.paste(rounded_img, (paste_x, paste_y), rounded_img)
    
    # Save
    final_img.save(output_path, "PNG")
    print(f"Processed and saved premium image: {output_path}")

if __name__ == "__main__":
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        
    if not os.path.exists(RAW_DIR):
        print(f"Directory {RAW_DIR} not found. Please run the scraping script first.")
        exit(1)

    processed_count = 0
    for filename in os.listdir(RAW_DIR):
        if filename.endswith(".png"):
            raw_path = os.path.join(RAW_DIR, filename)
            out_path = os.path.join(OUTPUT_DIR, filename)
            try:
                add_rounded_corners_and_shadow(raw_path, out_path)
                processed_count += 1
            except Exception as e:
                print(f"Failed to process {filename}: {e}")
                
    print(f"Finished processing {processed_count} images.")
