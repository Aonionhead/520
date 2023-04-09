import os
import shutil
from PIL import Image

# 源文件夹路径
src_folder = "/Users/libo20/Downloads/album-3D-Multiform/images/2"
# 目标文件夹路径
dst_folder = "/Users/libo20/Downloads/album-3D-Multiform/images/small"
# 图片文件扩展名
image_exts = (".jpg", ".jpeg", ".png", ".gif", ".heic", ".livp")  # 可根据需要修改
# 新的图片文件扩展名
new_image_ext = "jpeg"

# 遍历源文件夹中的文件
for i, filename in enumerate(os.listdir(src_folder)):
    print('i=', i)
    if i >= 13:
        i -= 1
    # 获取文件的完整路径
    src_path = os.path.join(src_folder, filename)
    
    # 检查文件是否是图片文件
    if filename.endswith(image_exts) and os.path.isfile(src_path):
        # 构建目标文件名
        dst_filename = "photo{}.{}".format(i + 1, new_image_ext)
        # 构建目标文件的完整路径
        dst_path = os.path.join(dst_folder, dst_filename)
        
        # 将源文件另存为jpg格式到目标文件夹并重新命名
        # image = Image.open(src_path)
        # 将HEIC图片保存为JPG格式
        # image.save(dst_filename, format="JPEG")
        
        shutil.copy(src_path, dst_path)
        print("File {} renamed to {}".format(filename, dst_filename))
