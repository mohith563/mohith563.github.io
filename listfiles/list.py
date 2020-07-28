import os 
from pathlib import Path
File_object = open(r"C:\Users\ST\Dev\gokul\listfiles\Wooden Clocks.txt","w")
for root, dirs, files in os.walk(r"C:\Users\ST\Dev\gokul\MotherlandCrafts\assets\resize\Wooden Clocks", topdown=False):
   c = 1000
   for name in files:
      multi_line = r"""        
      <!-- Grid column -->
        <div class="mb-3 pics animation all 10 gallery__container">
          <img class="img-fluid " src="assets/resize/Wooden Clocks/""" +name+r"""" alt="Craft item image" style="width: 100%;">
          <div class="gallery__middle">
            <div class="gallery__text">"""+"WC "+str(c)+r"""</div>
          </div>
        </div>
      <!-- Grid column -->
      """
      File_object.write(multi_line)
      c+=1
