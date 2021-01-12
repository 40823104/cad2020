var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'W1', 'text': '\n \n \n \n \n \n 41~50的inventor2017檔案連結:\xa0 https://drive.google.com/drive/folders/1AdEeOl8-6bnq9T8J4whA5S-v2m4cKAw0?usp=sharing \n \n 第三組 1~50 體積比較圖 \n \n \n \n \n \n', 'tags': '', 'url': 'W1.html'}, {'title': 'PDF2', 'text': '', 'tags': '', 'url': 'PDF2.html'}, {'title': 'W2', 'text': 'inventor2017檔案連結: https://drive.google.com/drive/folders/1wnf3n8B8Nqw7OKIBcJ4tnGVeDxwqGvhL?usp=sharing \n \n pdf2-1 \n \xa0 \n 體積:747699.052 mm^3 (相對誤差 = 0.191076%) \n \n \n \n pdf2-2 \n \n 體積: 955044.167 mm^3 (相對誤差 = 0.439258%) \n \n \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W4', 'text': 'inventor2017檔案連結: https://drive.google.com/drive/folders/1521vPCW0s49cU4BeHC5Z1BXBjXHAvTB5?usp=sharing \n \n \n pdf2-3 \n \n 體積:215591.796 mm^3 (相對誤差 = 0.128727%) \n \n pdf2-4 \n \n 體積:1180558.159 mm^3 (相對誤差 = 0.346589%) \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': 'inventor2017檔案連結: https://drive.google.com/drive/folders/1hDdc-svmmlsvmELhQTUKIyw2xnjmZwQN?usp=sharing \n \n pdf2-5.1 \n \n 體積:464519.549 mm^3 (相對誤差 = 0.030039%) \n pdf2-5.2 \n \n 體積:207036.977 mm^3 (相對誤差 = 0.108028%) \n pdf2-5.3 \n \n 體積:37388.225 mm^3 (相對誤差 = 0.028201%) \n pdf2-5 \n \n 體積:708944.752 mm^3 (相對誤差 = 0.052718%) \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': 'inventor2017檔案連結: https://drive.google.com/drive/folders/12yySJebnl81FOF9-1OliSTnVuH_91Nny?usp=sharing \n \n pdf2-6 \n \n 體積:2610310.343 mm^3 (相對誤差 = 0.000107%) \n \n pdf2-7 \n \n 體積:33677.873 mm^3 (相對誤差 = 0.058759%) \n \n pdf2-8 \n \n 體積:18802.432 mm^3 (相對誤差 = 0.021343%) \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '工程師的特質: 1.有創造性 2.具有精確性 (有知識的) \n 利用inventor2019繪製作業者,可以使用下方程式碼修改工件尺寸並取得影像圖和體積數據 \n \n \n \n \n \n \n \n import   pythoncom \n import   win32com.client \n import   win32api \n import   os \n \xa0 \n # Open Inventor \n invApp  =   win32com.client.Dispatch( "Inventor.Application" ) \n #print(invApp) \n invApp.Visible  =   True \n \xa0 \n invApp.SilentOperation  =   True \n \xa0 \n # Set location of assembly \n partName  =   \'C:/tmp/Part1.ipt\' \n \xa0 \n # Open the model \n oDoc  =   invApp.Documents. Open (partName) \n # use UserParameters to access the user parameters \n #oUserParams = oDoc.ComponentDefinition.Parameters.UserParameters \n #oNewParam = oUserParams.AddByExpression("x", "9", "mm") \n # use Item() to get the model parameter named "d0" \n d0  =   oDoc.ComponentDefinition.Parameters.Item( "d0" ) \n # Expression can add dimension unit \n #d0.Expression = "2 cm" \n # Value use the default system unit: cm \n d0.Value  =   2 \n # use Update() method to get the new part volume \n oDoc.Update() \n # fit the active view and save the part image \n invApp.ActiveView.Fit( True ) \n oDoc.SaveAs( "C:/tmp/Part1.png" ,  True ) \n print (oDoc.ComponentDefinition.MassProperties.Volume) \n #invApp.Quit() \n \n \n \n \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W10', 'text': '做出分組網站 :\xa0 https://40823131.github.io/cad2020ag3 \n 小組討論1 \n \n \n 最後結論 : 摩天輪 \n \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '個人部分 \n 工作分配 : 機構設計 \n 手繪設計圖 : \n \n 繪製2D圖確認尺寸 : \n autocad2017檔案連結: https://drive.google.com/drive/folders/1nzF86gJjtnxq3vWwx_pupkbiG9cOizHD?usp=sharing \n \n \n \n \n \n \n 轉交負責繪製3D圖的組員 \n 轉交負責程式試驗的組員 \n \n 測試結果: https://40823131.github.io/cad2020ag3/content/version1.0.0.html \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '從負責程式試驗的組員那邊收到需改進的地方 \n 修改設計 : \n 手繪部分: \n \n \n 繪製2D圖 \n autocad2017檔案連結: https://drive.google.com/drive/folders/1bA8to09EZ6-FuMR-kndR7NFuN4eKZsYc?usp=sharing \n \n \n \n \n \n \n 轉交負責繪製3D圖的組員 \n 轉交負責程式試驗的組員 \n 測驗結果: https://40823131.github.io/cad2020ag3/content/version2.0.0.html \n \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '小組討論2 \n \n \n 結論:利用車廂連結偏心增重後側以穩定車廂 \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '從負責程式試驗的組員那邊收到需改進的地方 \n 修改設計 : \n 繪製2D圖 \n autocad2017檔案連結: https://drive.google.com/drive/folders/19Sfww_t1grQmPoPIKwVck9nq-SjSUcEf?usp=sharing \n \n \n \n \n \n 轉交負責繪製3D圖的組員 \n 轉交負責程式試驗的組員 \n 測驗結果: https://40823131.github.io/cad2020ag3/content/version3.0.0.html \n \n \n', 'tags': '', 'url': 'W14.html'}, {'title': 'W16', 'text': '小組作業最終版圖檔: https://drive.google.com/file/d/1RqWqTuh6Qs0v3_lekJZcekwrUSwJ7r3y/view?uringsp=sha \n 小組作業最終 版圖檔: \xa0 https://drive.google.com/file/d/1gbqzsytjJ4efcs1-YcZzcqvJq66w33Ny/view?usp=sharing \n \n 利用繪出各軸做為參考移動joint解決了無法對到各工件軸心的問題，而之前version3.0.0版本中解決了車廂重心不穩搖晃問題後，此版本針對於鏟球機構以及接球的圓形軌道進行了設計以及模擬，也因軌道設計的部分而牽動車廂形狀的修改，以配合正常作動。 \n', 'tags': '', 'url': 'W16.html'}, {'title': 'W17', 'text': "多人網際協同-專業定位,無遠弗屆(國際化) \n 持續改進-分散版本及歷程(近端+雲端) \n 虛實互動-價值導向解決問題(定性+定量+數學模擬) \n 機電資軟硬整合-買方導向,高度客製化(適者生存) \n \n 常用2000英文單字: \n A- a/an, a few, a little, a lot, a.m., able, about, above, abroad, across, act, action, actor, actress, actually, afraid, after, afternoon, again, age, ago, agree, ahead, air, airplane(plane), airport, all, allow, almost, along, already, also, always, America, American,and, angle, angry, animal, another, answer, ant, any, anyone(anybody), anything, apartment, appear, apple, April, area, arm, around, arrive, art, as, ask, at, attack, August, aunt, autumn(fall), away B- baby, back, bad, badminton, bag, bake, bakery, balcony, banana, band, bank, baseball, basket, basketball, bat, bath, bathroom, be(am, is, are, was, were, been), beach, bean, bear, beautiful, because, become, bed, bedroom, bee, beef, before, begin, behind, believe, bell, belong, below, belt, bench, beside, between, bicycle(bike), big, bird, birthday, bite, black, blackboard, blank, blanket, blind, block, blow, blue, boat, body, boil, book, bookstore, bored, boring, born, borrow, boss, both, bottle, bottom, bow, bowl, box, boy, brave, bread, break, breakfast, bridge, bright, bring, brother, brown, brush, bug, build, bun, burn, bus, business, businessman, busy, but, butter, butterfly,button, buy, by C- cake, call, camera, camp, can, could, candle, candy, cap, car, card, care, careful, carry, case, castle, cat, catch, celebrate, cellphone, cent, center, centimeter, chair, chalk, chance, change, cheap, cheat, check, cheer, cheese, chicken,\xa0 child, China,\xa0 Chinese, chocolate, choice, choose,\xa0 chopsticks, Christmas, church, circle, city, clap, class, classmate, classroom,clean, clear, clerk, climb, clock, close, clothes, cloud, cloudy, club, coat, coffee, cold,\xa0 collect,\xa0 color,\xa0 comb,\xa0 come,\xa0 comfortable,\xa0 comic,\xa0 common,\xa0 computer, convenient, cook, cookie, cool, copy, corner, correct, cost, couch, count, country, course, cousin, cover, cow, crazy, cross, cry, cup, cut, cute \xa0\xa0 \xa0 D- dance,dangerous,dark,date,daughter,day,dead,deal,dear,death,December,decide,deep,define,delicious,dentist,department store,desk,dictionary,die,different,difficult,dig,dining room,dinner,dirty,dish,do (does, did, done),doctor(Dr.),dog,doll,dollar,door,dot,down,download,dozen,draw,drawer,dream,dress,drink,drive,driver,drop,drum,dry,duck,during \xa0\xa0 \xa0 E- each,ear,early,earth,earthquake,east,Easter, easy,eat,egg,eight,eighteen,eighty,either,elementary school,elephant,eleven,else,e-mail,end,engineer,English, enjoy,enough,enter,envelope,eraser,error,eve,even,evening,ever,every,everyone(everybody),everything,example,excellent,except,excited,exciting,excuse,exercise,expect,expensive,experience,explain,eye \xa0\xa0 \xa0 F- face,fact,factory,fail,fall,family,famous,fan,far,farm,farmer,fast,fat,father(dad, daddy),favorite,February,feed,feel,festival,fever,few, 55fifteen,fifty,fight,file,fill,finally,find,fine,finger,finish,fire,first,fish,fisherman,five,fix,floor, flower,fly,follow,food,fool,foot,for,foreign,foreigner,forget,fork,forty,four,fourteen,fox,free,fresh,Friday,friend,friendly,fries(French fries),frog,from,front,fruit,fry,full,fun,funny,future \xa0\xa0 \xa0 G- game, garden, garbage, gas, gate, get, ghost, giant, gift, girl, give, glad, glass, glasses, glove, glue, go, goat, god, good, good-bye(goodbye, bye), goose, grade, gram, grandfather(grandpa), grandmother(grandma), grape, grass, gray, great, green, ground, group, grow, guava, guess, guitar, guy, gym H- habit, hair, half, Halloween, ham, hamburger (burger), hand, handsome, hang, happen, happy, hard, hard-working, hat, hate, have (has, had), he (him, his, himself), head, headache, health, healthy, hear, heart, heat, heavy, height, hello, help, helpful, hen, here, hey, hi, hide, high, hike, hill, history, hit, hobby, hold, holiday, home, homework, honest, honey, hope, horse, hospital, hot, hot dog, hotel, hour, house, housewife, how, however, hundred, hungry, hunt, hurry, hurt, husband I- I(me, my, mine, myself), ice, ice cream, idea, if, important, in, inch, insect, inside, interest, interested, interesting, Internet (Net), interview, into, invite, island, it(its, itself), item \xa0\xa0 \xa0 J- jacket, January, jeans, job, jog, join, joke, joy, juice, July, jump, June, junior high school, just K- keep, key, kick, kid, kill, kilogram, kind, king, kiss, kitchen, kite, knee, knife, knock, know, knowledge L- lake, lamp, land, language, large, last, late, later, laugh, lawyer, lazy, lead, leader, learn, least, leave, left, leg, lemon, lend, less, lesson, let, letter, level, library, lie, life, light, like, line, lion, lip, list, listen, little,live, living room, lonely, long, look, lose, loud, love, lovely, low, lucky, lunch M- machine, mad, magic, mail, mailman(mail carrier), main, make, man, many, map, March, mark, marker, market, married, mask, math(mathematics), matter, may (might), May,maybe, meal, mean, meat, medicine, medium, meet, meeting, member, menu, metro, middle, mile, milk, million, mind, minute, Miss, miss, mistake, modern, moment, Monday, money, monkey, month, moon, more, morning, mop, most, mother (mom, mommy), motorcycle, mountain, mouse, mouth, move, movie, Mr., Mrs., Ms., much, mud, museum, music, must N- nail, name, national, nature, near, neck, need, neighbor, never, new, news, newspaper, next, nice, night, nine, nineteen, ninety, no, nobody, noise, noisy, noodle, noon,north, nose, not, note, notebook, nothing, notice, November, now, number, nurse O- o'clock, October, of, off, office, officer, often, oil, OK, old, on, once, one, only, open, or,\xa0 orange, order, other, out, outside, over, own P- p.m., pack, package, page, paint, pair, pants, papaya, paper, parent, park, part, 56party, pass, past, paste, pay, PE(physical education), peach, pear, pen, pencil, people, perhaps, person, pet, photo, piano, pick, picnic, picture, pie, piece, pig, pin, pink, pipe, pizza, place, plan, planet, plant, plate, play, player, playground, please, pleasure, pocket, point, police, polite, pond, pool, poor, pop, popcorn, popular, pork, possible, post office, postcard, pot, pound, power, probably, practice, pray, prepare, present, pretty, price, prize, problem, program, proud, public, pull, pumpkin, puppy, purple, push, put \xa0\xa0 \xa0 Q- quarter, queen, question, quick, quiet, quite, quiz R- rabbit, race, radio, rain, rainbow, rainy, raise, rat, reach, read, ready, real, really, reason, red, refrigerator (fridge), relative, remember, repeat, report, reporter, rest, restaurant, restroom, rice, rich, ride, right, ring, rise, river, road, robot, R.O.C./ROC,rock, roll, room, root, rope, rose, round, row, rule, ruler, run S- sad, safe, sail, salad, sale, salesman, salt, same, sandwich, Saturday, save, say, scared, school, science, scooter, screen, sea, season, seat, second, secretary, see, seed, seesaw, seldom, sell, send, senior high school, sentence, September, serious, service, set, seven, seventeen, seventy, several, shake, shape, share, sharp, she (her, hers, herself), sheep, shine, ship, shirt, shoe(s), shop, shopkeeper, short, shorts, should, shoulder, shout, show, shower, shy, sick, side, sidewalk, sight, sign, simple, since, sing, singer, sir, sister, sit, six, sixteen, sixty, size, skirt, sky, sleep, slide, slim, slow, small, smart, smell, smile, smoke, snack, snake, snow, snowy, so, soccer, socks, sofa, soldier, some, someone(somebody), something, sometimes, somewhere, son, song, soon, sore, sorry, sound, soup, south, space, speak, special, spell, spend, spider, spoon, sports, spring, square, stairs, stamp, stand, star, start, station, stay, steak, still, stomach, stop, store, story, straight, strange, stranger, strawberry, street, string, strong,student, study, stupid, subject, successful, sugar, summer, sun, Sunday, sunny, supermarket, sure, surf, surprise, surprised, sweater, sweet, swim, swing T- table, tail, Taiwan, take, talk, tall, tape, taste, taxi, tea, teach, teacher, team, teenager, telephone(phone), television(TV), tell, temple, ten, tennis, terrible, test, than, thank, that, the, theater, then, there, these, they(them, their, theirs, themselves), thick, thin, thing, think, third, thirsty, thirteen, thirty, this, those, though(although), thousand, three, throat, through, throw, Thursday, ticket, tidy, tie, tiger, time, tip, tired, to, toast, today, toe, together, tomato, tomorrow, tonight, too, tool, tooth, top, topic, total, touch, towel, town, toy, traffic, train, trash, treat, tree, trick, trip, trouble, truck, true, try, T-shirt, Tuesday, turn, turtle, twelve, twenty, twice, two, type, typhoon U- ugly, umbrella, uncle, under, understand, unhappy, uniform, until, up, upload, U.S.A./USA, use, useful, usually V- vacation, vegetable, very, video, violin, visit, visitor, voice W- wait, waiter, waitress, wake, walk, wall, wallet, want, warm, wash, watch, water, watermelon, wave, way, we (us, our, ours, ourselves), weak, wear, weather, Wednesday, week, weekend, welcome, well, west, wet, what, when, where, whether, which, while, white, who, whose, why, wide, wife, will(would), win, wind, window, windy, winter, wise, wish, with, without, woman, wonderful, word, work, workbook, worker, world, worry, write, writer, wrong \xa0\xa0 \xa0 X- Y- yard, year, yellow, yes(yeah), yesterday, yet, you(your, yours, yourself, yourselves), young, yummy Z- zebra, zero, zoo \n 其他常用800字 A- absent,\xa0 accept,\xa0 accident,\xa0 active,\xa0 activity,\xa0 add,\xa0 address,\xa0 admire,\xa0 adult, advertisement, advice, advise, affect, against, aim, air conditioner, airlines, alarm, album, alike, alive, alone, aloud, alphabet, altogether, ambulance, among, amount, ancient,angel,anger, ankle, anywhere, apologize, appreciate, argue, armchair, army, arrange, artist, asleep, assistant, assume, attention, available, avoid B- baby sitter, backpack, backward, ball, balloon,barbecue,barber, bark, base, basement, basic, bathe, beard, beat, beauty, beer, beginner, beginning, behave, besides, beyond, bill, biology, bitter, blame, bless, blood, blouse, board, bomb, bone, bookcase, bother, bowling, branch, brick, broad, broadcast, brunch, bucket, buffet, building, bundle, burger, burst C- cabbage,\xa0 cable,\xa0 cafeteria, cage,\xa0 calendar,\xa0 calm,\xa0 campus,\xa0 cancel,\xa0 cancer, captain, careless, carpet, carrot, cartoon, cash, cause, ceiling, central, century, cereal, certain, channel, character, charge, chart, chase, chemistry, chess,\xa0 childhood,\xa0 childish,\xa0 childlike,\xa0 chin,\xa0 chubby,\xa0 classical,\xa0 clever, climate,\xa0 closet,\xa0 coach,\xa0 coast,\xa0 cockroach,\xa0 coin, cola,\xa0 college,\xa0 colorful, command, comment,company, compare, complain, complete, concern,confident,confuse,\xa0 congratulation,\xa0 consider,\xa0 considerate,\xa0 contact\xa0 lens,\xa0 continue, contract,\xa0 control,\xa0 convenience\xa0 store,\xa0 conversation,\xa0 corn,\xa0 cotton,\xa0 cough, couple, courage, court, cowboy,crab, crayon, cream, create, credit card, crime, crowd, crowded, cruel, culture, cure, curious, current, curtain, curve, custom, customer D- daily, damage, danger, dawn, deaf, debate, decision, decorate, decrease, deer, degree, deliver, department, depend, describe, desert, design, desire, dessert, detect, develop, dial, diamond, diary, diet, difference, difficulty, diligent, diplomat,\xa0 dinosaur,\xa0 direct,\xa0 direction,\xa0 disappear,\xa0 discover,\xa0 discuss, discussion, dishonest, distance, distant, divide, dizzy, dodgeball, dolphin, donkey, double, doubt, doughnut, downstairs, downtown, dragon, drama, dresser, drugstore, dryer, dumb, dumpling, duty E- eagle, earn, earrings, ease, edge, education, effort, elder, elect, electric, embarrass, emotion, emphasize, employ, empty, enemy, energetic, energy, engine, 58entrance, environment, envy, equal, especially, event, everywhere, evil, exam, excite, exist, exit, express, extra F- fair,false, fancy, fantastic, fashionable, faucet, fault, fear, fee, feeling, female, fence, film, final, fit, flag, flashlight, flat tire, flight, flour, flu, flute, focus, fog, foggy, foolish, football, forest, forgive, form, formal, former,\xa0 forward,\xa0 frank,\xa0 freedom,\xa0 freezer,\xa0 freezing,\xa0 friendship,\xa0 frighten,frisbee, furniture G- gain, garage, gather, general, generous, genius, gentle, gentleman, geography, gesture,\xa0 goal,\xa0 gold,\xa0 golden,\xa0 golf,\xa0 goodness,\xa0 government,\xa0 granddaughter, grandson, greedy, greet, guard, guest, guide, gun H- hair dresser, haircut, hall, hammer, handkerchief, handle, hanger, hardly, heater, helicopter, hero, highway, hip, hippo, hire, hole, homesick, honesty, hop, horrible, host, housework, hug, human, humble, humid, humor, humorous, hunger, hunter I- ignore,\xa0 ill,\xa0 imagine,\xa0 impolite,\xa0 importance,\xa0 impossible,\xa0 improve,\xa0 include, income, increase, independent, indicate, influence, information, ink, insist,inspire,\xa0\xa0 instant,\xa0\xa0 instrument,\xa0\xa0 intelligent,\xa0\xa0 international,\xa0\xa0 interrupt, introduce, invent, invitation, iron J- jam, jazz, jealous, jeep, journalist, judge K- kangaroo, ketchup, kilometer, kindergarten, kingdom, kitten,koalaL-lack, lady, lamb, lantern, latest, latter, law, lay, leaf, lettuce, lick, lid, lift, lightning, likely, limit, link, liquid, liter, loaf, local, lock, locker, loser M- ma'am, magazine, magician, major, male, mall, manager, mango, manner, marry, marvelous,\xa0 mass,\xa0 master, mat,\xa0 match,\xa0 maximum,\xa0 meaning,\xa0 measure,mechanic, memory, men's room, message, metal, meter, method, microwave, midnight, minor, minus, mirror, mix, model, monster, mosquito, motion, movement, MRT, musician N- napkin, narrow, nation, natural, naughty, nearly, necessary, necklace, needle, negative, neither, nephew, nervous, nest, net, nice-looking, niece,nod, none, nor, novel, nut O- obey, object, ocean, offer, omit, oneself, onion, operation, opinion, ordinary, oven, overpass, overseas, over-weight, owner, ox P- pain, painful, painter, pajamas, pale, pan, panda, pardon, parking lot, parrot, partner, passenger, path, patient, pattern, pause, peace, peaceful, pepper, perfect, period, personal, physics, pigeon, pile, pillow, pineapple, plain, platform, pleasant, pleased, plus, poem, poison, pollute, pollution, pop music, population, position, positive, potato, powder, praise, precious, president, pressure,\xa0 priest,\xa0 primary, prince, princess,\xa0 principal,\xa0 principle,\xa0 print, printer, private, produce, production, professor, progress, project, promise, pronounce, protect, provide, pump, punish, purpose, purse, puzzle \xa0\xa0 \xa0 Q- quit R- railroad, railway, raincoat, rare, rather, realize, receive, record, recover, rectangle, recycle, refuse, regret, regular, reject, remind, rent,repair, respect, responsible, result, return, review, revise, rob, role, roller skate (roller blade),roof, rub, rubber, rude, ruin, rush", 'tags': '', 'url': 'W17.html'}]};