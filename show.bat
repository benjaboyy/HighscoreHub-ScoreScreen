cd C:\Users\ddrexp\Desktop\scr

rm list.html
rm out.html

wget http://www.highscorehub.com/embed/hub/398 -O list.html
copy /b list.html+style.html out.html
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" out.html

rm list.html
rm out.html