var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'W1', 'text': '\n \n \n \n \n \n 41~50的inventor2017檔案連結:\xa0 https://drive.google.com/drive/folders/1AdEeOl8-6bnq9T8J4whA5S-v2m4cKAw0?usp=sharing \n \n 第三組 1~50 體積比較圖 \n \n \n \n \n \n', 'tags': '', 'url': 'W1.html'}, {'title': 'PDF2', 'text': '', 'tags': '', 'url': 'PDF2.html'}, {'title': 'W2', 'text': 'inventor2017檔案連結: https://drive.google.com/drive/folders/1wnf3n8B8Nqw7OKIBcJ4tnGVeDxwqGvhL?usp=sharing \n \n pdf2-1 \n \xa0 \n 體積:747699.052 mm^3 (相對誤差 = 0.191076%) \n \n \n \n pdf2-2 \n \n 體積: 955044.167 mm^3 (相對誤差 = 0.439258%) \n \n \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W4', 'text': 'inventor2017檔案連結: https://drive.google.com/drive/folders/1521vPCW0s49cU4BeHC5Z1BXBjXHAvTB5?usp=sharing \n \n \n pdf2-3 \n \n 體積:215591.796 mm^3 (相對誤差 = 0.128727%) \n \n pdf2-4 \n \n 體積:1180558.159 mm^3 (相對誤差 = 0.346589%) \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': 'inventor2017檔案連結: https://drive.google.com/drive/folders/1hDdc-svmmlsvmELhQTUKIyw2xnjmZwQN?usp=sharing \n \n pdf2-5.1 \n \n 體積:464519.549 mm^3 (相對誤差 = 0.030039%) \n pdf2-5.2 \n \n 體積:207036.977 mm^3 (相對誤差 = 0.108028%) \n pdf2-5.3 \n \n 體積:37388.225 mm^3 (相對誤差 = 0.028201%) \n pdf2-5 \n \n 體積:708944.752 mm^3 (相對誤差 = 0.052718%) \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': 'inventor2017檔案連結: https://drive.google.com/drive/folders/12yySJebnl81FOF9-1OliSTnVuH_91Nny?usp=sharing \n \n pdf2-6 \n \n 體積:2610310.343 mm^3 (相對誤差 = 0.000107%) \n \n pdf2-7 \n \n 體積:33677.873 mm^3 (相對誤差 = 0.058759%) \n \n pdf2-8 \n \n 體積:18802.432 mm^3 (相對誤差 = 0.021343%) \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '工程師的特質: 1.有創造性 2.具有精確性 (有知識的) \n 利用inventor2019繪製作業者,可以使用下方程式碼修改工件尺寸並取得影像圖和體積數據 \n \n \n \n \n \n \n \n import   pythoncom \n import   win32com.client \n import   win32api \n import   os \n \xa0 \n # Open Inventor \n invApp  =   win32com.client.Dispatch( "Inventor.Application" ) \n #print(invApp) \n invApp.Visible  =   True \n \xa0 \n invApp.SilentOperation  =   True \n \xa0 \n # Set location of assembly \n partName  =   \'C:/tmp/Part1.ipt\' \n \xa0 \n # Open the model \n oDoc  =   invApp.Documents. Open (partName) \n # use UserParameters to access the user parameters \n #oUserParams = oDoc.ComponentDefinition.Parameters.UserParameters \n #oNewParam = oUserParams.AddByExpression("x", "9", "mm") \n # use Item() to get the model parameter named "d0" \n d0  =   oDoc.ComponentDefinition.Parameters.Item( "d0" ) \n # Expression can add dimension unit \n #d0.Expression = "2 cm" \n # Value use the default system unit: cm \n d0.Value  =   2 \n # use Update() method to get the new part volume \n oDoc.Update() \n # fit the active view and save the part image \n invApp.ActiveView.Fit( True ) \n oDoc.SaveAs( "C:/tmp/Part1.png" ,  True ) \n print (oDoc.ComponentDefinition.MassProperties.Volume) \n #invApp.Quit() \n \n \n \n \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W10', 'text': '做出分組網站 :\xa0 https://40823131.github.io/cad2020ag3 \n 小組討論1 \n \n \n 最後結論 : 摩天輪 \n \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '個人部分 \n 工作分配 : 機構設計 \n 手繪設計圖 : \n \n 繪製2D圖確認尺寸 : \n autocad2017檔案連結: https://drive.google.com/drive/folders/1nzF86gJjtnxq3vWwx_pupkbiG9cOizHD?usp=sharing \n \n \n \n \n \n \n 轉交負責繪製3D圖的組員 \n 轉交負責程式試驗的組員 \n \n 測試結果: https://40823131.github.io/cad2020ag3/content/version1.0.0.html \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '從負責程式試驗的組員那邊收到需改進的地方 \n 修改設計 : \n 手繪部分: \n \n \n 繪製2D圖 \n autocad2017檔案連結: https://drive.google.com/drive/folders/1bA8to09EZ6-FuMR-kndR7NFuN4eKZsYc?usp=sharing \n \n \n \n \n \n \n 轉交負責繪製3D圖的組員 \n 轉交負責程式試驗的組員 \n 測驗結果: https://40823131.github.io/cad2020ag3/content/version2.0.0.html \n \n', 'tags': '', 'url': 'W12.html'}]};