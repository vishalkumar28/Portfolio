import rembg
from PIL import Image

def remove_background(input_path, output_path):
    print(f"Removing background from {input_path}...")
    try:
        input_image = Image.open(input_path)
        output_image = rembg.remove(input_image)
        output_image.save(output_path)
        print(f"Successfully saved to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    remove_background("public/public.png", "public/profile-nobg.png")
