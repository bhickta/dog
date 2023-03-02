import os

cmd = 'npm install -D tailwindcss postcss autoprefixer && cd ../ && npx tailwindcss init'
result = os.popen(cmd)