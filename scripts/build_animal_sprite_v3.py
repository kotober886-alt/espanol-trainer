from PIL import Image, ImageDraw

W,H=1350,600
COLS,ROWS=9,4
CW,CH=W//COLS,H//ROWS
BG=(250,248,244)
INK=(55,50,88)
SHADOW=(225,222,214)
img=Image.new('RGB',(W,H),BG)
d=ImageDraw.Draw(img)

def E(box, fill, outline=INK, w=4): d.ellipse(box,fill=fill,outline=outline,width=w)
def R(box, fill, outline=INK, w=4, radius=18): d.rounded_rectangle(box,radius=radius,fill=fill,outline=outline,width=w)
def P(points, fill, outline=INK, w=4): d.polygon(points,fill=fill); d.line(points+[points[0]],fill=outline,width=w,joint='curve')
def L(points, fill=INK, w=4): d.line(points,fill=fill,width=w,joint='curve')
def base(cx,cy,scale=1.0): d.ellipse((cx-45*scale,cy+40*scale,cx+45*scale,cy+52*scale),fill=SHADOW)
def eyes(cx,cy,dx=15,dy=0,r=3): E((cx-dx-r,cy+dy-r,cx-dx+r,cy+dy+r),INK,None,0); E((cx+dx-r,cy+dy-r,cx+dx+r,cy+dy+r),INK,None,0)
def nose(cx,cy,color=(70,58,70)): E((cx-5,cy-3,cx+5,cy+5),color,INK,2)
def muzzle(cx,cy,fill=(244,220,192)): E((cx-16,cy-5,cx+16,cy+15),fill,INK,3); nose(cx,cy+3)

def mammal(cx,cy,color,ear='round',muzzle_fill=(244,220,192),horns=False,mane=False,stripes=False,trunk=False,longneck=False,spots=False):
    base(cx,cy)
    if longneck:
        R((cx-11,cy-24,cx+11,cy+35),color,INK,4,10); E((cx-24,cy-50,cx+24,cy-6),color,INK,4)
        L([(cx-12,cy-48),(cx-15,cy-60)],INK,4); L([(cx+12,cy-48),(cx+15,cy-60)],INK,4)
        E((cx-19,cy-64,cx-11,cy-56),color,INK,3); E((cx+11,cy-64,cx+19,cy-56),color,INK,3)
        eyes(cx,cy-35,10); muzzle(cx,cy-22,(241,205,154))
        if spots:
            for ox,oy in [(-8,-2),(7,15),(-5,28),(8,-34)]: E((cx+ox-4,cy+oy-4,cx+ox+4,cy+oy+4),(171,116,68),None,0)
        return
    if mane: E((cx-43,cy-48,cx+43,cy+38),(176,118,62),INK,4)
    E((cx-34,cy-3,cx+34,cy+45),color,INK,4)
    if ear=='round':
        E((cx-34,cy-42,cx-14,cy-22),color,INK,4); E((cx+14,cy-42,cx+34,cy-22),color,INK,4)
    elif ear=='point':
        P([(cx-30,cy-25),(cx-25,cy-55),(cx-8,cy-32)],color); P([(cx+30,cy-25),(cx+25,cy-55),(cx+8,cy-32)],color)
    elif ear=='long':
        E((cx-26,cy-75,cx-8,cy-25),color,INK,4); E((cx+8,cy-75,cx+26,cy-25),color,INK,4)
    if horns:
        P([(cx-28,cy-36),(cx-38,cy-58),(cx-19,cy-43)],(247,230,178)); P([(cx+28,cy-36),(cx+38,cy-58),(cx+19,cy-43)],(247,230,178))
    E((cx-32,cy-42,cx+32,cy+18),color,INK,4); eyes(cx,cy-22,12)
    if trunk:
        E((cx-12,cy-8,cx+12,cy+30),color,INK,4); R((cx-2,cy+15,cx+15,cy+36),color,INK,4,8)
    else: muzzle(cx,cy-8,muzzle_fill)
    if stripes:
        for ox in (-18,0,18): L([(cx+ox,cy-38),(cx+ox-3,cy-24)],(95,68,60),3)

def turtle(cx,cy):
    base(cx,cy,.9); shell=(120,173,91)
    E((cx-38,cy-23,cx+28,cy+30),shell,INK,4); E((cx+22,cy-12,cx+45,cy+10),(130,190,100),INK,4); eyes(cx+36,cy-3,0,r=2)
    for ox,oy in [(-26,-20),(-26,23),(12,-22),(12,25)]: E((cx+ox-6,cy+oy-5,cx+ox+6,cy+oy+5),(130,190,100),INK,3)
    L([(cx-22,cy-10),(cx+10,cy+20)],(80,125,70),3); L([(cx+15,cy-10),(cx-12,cy+20)],(80,125,70),3)

def bird(cx,cy,color,kind='bird'):
    base(cx,cy,.8)
    if kind=='penguin':
        E((cx-27,cy-46,cx+27,cy+42),(50,52,75),INK,4); E((cx-14,cy-30,cx+14,cy+30),(248,244,226),None,0); eyes(cx,cy-32,8,r=2); P([(cx+25,cy-24),(cx+38,cy-17),(cx+25,cy-12)],(235,170,56),INK,3); return
    if kind=='flamingo':
        E((cx-18,cy-40,cx+18,cy-5),color,INK,4); E((cx-25,cy-7,cx+25,cy+28),color,INK,4); L([(cx-8,cy+25),(cx-8,cy+48)],color,4); L([(cx+8,cy+25),(cx+8,cy+48)],color,4); eyes(cx,cy-27,0,r=2); P([(cx+16,cy-30),(cx+32,cy-24),(cx+17,cy-18)],(45,45,60),INK,3); return
    E((cx-25,cy-40,cx+25,cy+12),color,INK,4); E((cx-29,cy-3,cx+29,cy+36),color,INK,4); eyes(cx,cy-25,0,r=2); P([(cx+22,cy-24),(cx+38,cy-17),(cx+22,cy-10)],(242,177,57),INK,3)
    if kind=='parrot': E((cx-15,cy-4,cx+15,cy+26),(72,155,205),INK,3)
    if kind=='owl': E((cx-20,cy-30,cx-4,cy-14),(244,239,211),INK,3); E((cx+4,cy-30,cx+20,cy-14),(244,239,211),INK,3)

def fish(cx,cy,color,kind='fish'):
    base(cx,cy,.7)
    if kind=='whale': E((cx-42,cy-23,cx+30,cy+25),color,INK,4); P([(cx-38,cy),(cx-58,cy-18),(cx-55,cy+8)],color); eyes(cx+15,cy-8,0,r=2); return
    if kind=='dolphin':
        P([(cx-43,cy),(cx-18,cy-22),(cx+23,cy-18),(cx+42,cy-2),(cx+18,cy+18),(cx-18,cy+20)],color); P([(cx+5,cy-17),(cx+13,cy-32),(cx+20,cy-15)],color); P([(cx-42,cy),(cx-58,cy-18),(cx-53,cy+4)],color); eyes(cx+27,cy-6,0,r=2); return
    if kind=='shark':
        P([(cx-42,cy),(cx-15,cy-25),(cx+32,cy-18),(cx+48,cy),(cx+30,cy+19),(cx-15,cy+22)],color); P([(cx,cy-22),(cx+8,cy-38),(cx+15,cy-20)],color); P([(cx-42,cy),(cx-58,cy-18),(cx-52,cy+5)],color); eyes(cx+25,cy-6,0,r=2); return
    P([(cx-42,cy),(cx-15,cy-24),(cx+29,cy-18),(cx+43,cy),(cx+28,cy+18),(cx-15,cy+24)],color); P([(cx-42,cy),(cx-58,cy-18),(cx-52,cy+4)],color); eyes(cx+24,cy-5,0,r=2)

def octopus(cx,cy):
    base(cx,cy,.7); E((cx-28,cy-40,cx+28,cy+12),(142,99,211),INK,4); eyes(cx,cy-20,10,r=2)
    for i in range(6):
        x=cx-28+i*11; L([(x,cy+5),(x-4,cy+30),(x+2,cy+42)],(142,99,211),6)

def crab(cx,cy):
    base(cx,cy,.7); E((cx-28,cy-10,cx+28,cy+25),(236,110,91),INK,4); eyes(cx,cy-12,10,r=2)
    for side in (-1,1):
        L([(cx+side*24,cy),(cx+side*43,cy-13)],(236,110,91),5); E((cx+side*50-8,cy-23,cx+side*50+8,cy-7),(236,110,91),INK,3)
        for j in range(3): L([(cx+side*(12+j*9),cy+20),(cx+side*(22+j*10),cy+34)],(236,110,91),4)

def snake(cx,cy):
    base(cx,cy,.6); pts=[]
    for i in range(7): pts.append((cx-42+i*14,cy+10+(-1 if i%2 else 1)*12))
    L(pts,(115,188,98),14); E((cx+34,cy-8,cx+55,cy+13),(115,188,98),INK,3); eyes(cx+46,cy-1,0,r=2); L([(cx+55,cy+2),(cx+62,cy-1)],(217,80,80),2)

def crocodile(cx,cy):
    base(cx,cy,.6); P([(cx-48,cy+10),(cx-25,cy-13),(cx+23,cy-12),(cx+50,cy),(cx+20,cy+17),(cx-25,cy+18)],(105,173,100)); P([(cx-48,cy+10),(cx-63,cy-2),(cx-58,cy+18)],(105,173,100)); eyes(cx+33,cy-5,0,r=2)

def lizard(cx,cy,color=(116,188,105)):
    base(cx,cy,.6); E((cx-20,cy-10,cx+22,cy+20),color,INK,4); E((cx+17,cy-18,cx+38,cy+3),color,INK,3); eyes(cx+29,cy-10,0,r=2); L([(cx-18,cy+2),(cx-45,cy-7)],color,6); L([(cx-12,cy+15),(cx-28,cy+30)],color,5); L([(cx+10,cy+16),(cx+24,cy+31)],color,5); L([(cx+2,cy-2),(cx+18,cy-18)],color,5)

def frog(cx,cy):
    base(cx,cy,.6); E((cx-30,cy-15,cx+30,cy+30),(102,189,92),INK,4); E((cx-31,cy-32,cx-12,cy-13),(102,189,92),INK,4); E((cx+12,cy-32,cx+31,cy-13),(102,189,92),INK,4); E((cx-25,cy-27,cx-19,cy-21),INK,None,0); E((cx+19,cy-27,cx+25,cy-21),INK,None,0); L([(cx-10,cy+5),(cx,cy+12),(cx+10,cy+5)],INK,3)

def draw_cell(i,key):
    r=i//COLS; c=i%COLS; cx=c*CW+CW//2; cy=r*CH+CH//2-2
    if key=='dog': mammal(cx,cy,(218,157,83))
    elif key=='cat': mammal(cx,cy,(151,135,197),'point')
    elif key=='rabbit': mammal(cx,cy,(238,222,202),'long',(246,199,202))
    elif key=='hamster': mammal(cx,cy,(227,177,89))
    elif key=='mouse': mammal(cx,cy,(177,177,202))
    elif key=='turtle': turtle(cx,cy)
    elif key=='horse': mammal(cx,cy,(179,116,67),'point')
    elif key=='cow': mammal(cx,cy,(245,242,223),'point',(246,195,198),True)
    elif key=='pig': mammal(cx,cy,(239,151,161),'round',(246,173,180))
    elif key=='sheep': mammal(cx,cy,(243,240,223))
    elif key=='goat': mammal(cx,cy,(231,216,173),'point',(244,220,192),True)
    elif key=='chicken': bird(cx,cy,(245,243,222))
    elif key=='lion': mammal(cx,cy,(222,161,68),mane=True)
    elif key=='tiger': mammal(cx,cy,(231,151,56),stripes=True)
    elif key=='bear': mammal(cx,cy,(142,103,77))
    elif key=='elephant': mammal(cx,cy,(155,162,192),trunk=True)
    elif key=='giraffe': mammal(cx,cy,(225,173,83),longneck=True,spots=True)
    elif key=='monkey': mammal(cx,cy,(146,96,64),muzzle_fill=(217,179,129))
    elif key=='eagle': bird(cx,cy,(101,79,65))
    elif key=='owl': bird(cx,cy,(126,104,86),'owl')
    elif key=='parrot': bird(cx,cy,(80,181,93),'parrot')
    elif key=='duck': bird(cx,cy,(246,203,62))
    elif key=='penguin': bird(cx,cy,(57,58,81),'penguin')
    elif key=='flamingo': bird(cx,cy,(235,132,151),'flamingo')
    elif key=='fish': fish(cx,cy,(83,178,213))
    elif key=='shark': fish(cx,cy,(115,145,173),'shark')
    elif key=='dolphin': fish(cx,cy,(86,163,205),'dolphin')
    elif key=='whale': fish(cx,cy,(109,142,190),'whale')
    elif key=='octopus': octopus(cx,cy)
    elif key=='crab': crab(cx,cy)
    elif key=='snake': snake(cx,cy)
    elif key=='crocodile': crocodile(cx,cy)
    elif key=='lizard': lizard(cx,cy)
    elif key=='frog': frog(cx,cy)
    elif key=='salamander': lizard(cx,cy,(233,112,94))
    elif key=='tortoise': turtle(cx,cy)

keys=['dog','cat','rabbit','hamster','mouse','turtle','horse','cow','pig','sheep','goat','chicken','lion','tiger','bear','elephant','giraffe','monkey','eagle','owl','parrot','duck','penguin','flamingo','fish','shark','dolphin','whale','octopus','crab','snake','crocodile','lizard','frog','salamander','tortoise']
for i,k in enumerate(keys): draw_cell(i,k)
img.save('assets/generated/study-animals-v3.webp','WEBP',quality=82,method=6)
