from PIL import Image, ImageDraw

W,H=1350,600
COLS,ROWS=9,4
CW,CH=W//COLS,H//ROWS
BG=(255,254,250)
img=Image.new('RGB',(W,H),BG)
d=ImageDraw.Draw(img)

def mix(c,f=.75): return tuple(int(x*f) for x in c)
def ell(box,fill,outline=None,w=2): d.ellipse(box,fill=fill,outline=outline,width=w if outline else 1)
def rr(box,r,fill,outline=None,w=2): d.rounded_rectangle(box,radius=r,fill=fill,outline=outline,width=w if outline else 1)
def poly(pts,fill,outline=None,w=2):
    d.polygon(pts,fill=fill)
    if outline: d.line(pts+[pts[0]],fill=outline,width=w,joint='curve')
def line(pts,fill,w=3): d.line(pts,fill=fill,width=w,joint='curve')
def eye(x,y): ell((x-2,y-2,x+2,y+2),(54,49,52))
def ground(cx,cy): ell((cx-42,cy+40,cx+42,cy+47),(236,231,220))

def mammal(cx,cy,body,kind='dog'):
    dk=mix(body,.62); lt=tuple(min(255,int(v*1.16)) for v in body); ground(cx,cy)
    if kind=='horse':
        ell((cx-37,cy-12,cx+15,cy+25),body); rr((cx+5,cy-48,cx+20,cy+12),7,body)
        poly([(cx+11,cy-49),(cx+16,cy-63),(cx+22,cy-49)],body); poly([(cx+3,cy-47),(cx+7,cy-59),(cx+12,cy-48)],body)
        line([(cx+9,cy-43),(cx+2,cy-15)],dk,5)
        for x in (cx-22,cx+3): line([(x,cy+20),(x,cy+43)],dk,6)
        line([(cx-37,cy+1),(cx-51,cy+10),(cx-55,cy+26)],dk,5); eye(cx+15,cy-34); return
    if kind=='cow':
        ell((cx-38,cy-12,cx+15,cy+26),lt); ell((cx+5,cy-38,cx+34,cy-9),lt)
        for ox,oy in [(-16,-5),(0,10),(10,-3)]: ell((cx+ox-8,cy+oy-6,cx+ox+8,cy+oy+6),dk)
        poly([(cx+9,cy-34),(cx+2,cy-47),(cx+16,cy-37)],(220,194,131)); poly([(cx+28,cy-34),(cx+37,cy-46),(cx+33,cy-31)],(220,194,131))
        for x in (cx-22,cx+3): line([(x,cy+20),(x,cy+43)],dk,6)
        eye(cx+25,cy-28); return
    if kind=='pig':
        ell((cx-39,cy-16,cx+18,cy+28),body); ell((cx+9,cy-31,cx+38,cy-4),body); poly([(cx+16,cy-27),(cx+20,cy-42),(cx+28,cy-28)],body)
        ell((cx+27,cy-20,cx+42,cy-9),lt); eye(cx+26,cy-25); line([(cx-38,cy),(cx-49,cy-7),(cx-45,cy-15)],dk,3)
        for x in (cx-20,cx+4): line([(x,cy+22),(x,cy+43)],dk,5)
        return
    if kind=='sheep':
        for ox,oy in [(-25,-3),(-10,-11),(7,-8),(20,1),(-16,9),(2,10)]: ell((cx+ox-18,cy+oy-16,cx+ox+18,cy+oy+16),(245,239,220))
        ell((cx+18,cy-28,cx+40,cy-5),body); eye(cx+33,cy-20)
        for x in (cx-18,cx+8): line([(x,cy+20),(x,cy+43)],dk,5)
        return
    if kind=='goat':
        ell((cx-35,cy-13,cx+15,cy+25),body); ell((cx+7,cy-35,cx+34,cy-8),body)
        poly([(cx+10,cy-34),(cx+5,cy-49),(cx+17,cy-36)],(220,194,131)); poly([(cx+28,cy-34),(cx+35,cy-48),(cx+31,cy-32)],(220,194,131))
        line([(cx+31,cy-12),(cx+37,cy+2)],dk,3)
        for x in (cx-20,cx+2): line([(x,cy+20),(x,cy+43)],dk,5)
        eye(cx+28,cy-26); return
    if kind=='giraffe':
        ell((cx-35,cy,cx+8,cy+27),body); rr((cx-3,cy-44,cx+12,cy+12),6,body); ell((cx+4,cy-58,cx+28,cy-35),body)
        for ox,oy in [(-20,6),(-3,14),(3,-18),(11,-45)]: ell((cx+ox-4,cy+oy-4,cx+ox+4,cy+oy+4),dk)
        line([(cx+9,cy-56),(cx+7,cy-66)],dk,2); line([(cx+20,cy-54),(cx+23,cy-64)],dk,2)
        for x in (cx-20,cx+1): line([(x,cy+23),(x,cy+44)],dk,5)
        eye(cx+20,cy-49); return
    if kind=='elephant':
        ell((cx-39,cy-18,cx+18,cy+28),body); ell((cx+5,cy-36,cx+37,cy-4),body); ell((cx-1,cy-32,cx+20,cy-10),lt)
        rr((cx+27,cy-14,cx+38,cy+28),5,body); line([(cx+37,cy+24),(cx+44,cy+20)],dk,4)
        for x in (cx-23,cx+1): line([(x,cy+22),(x,cy+44)],dk,7)
        eye(cx+28,cy-27); return
    if kind=='monkey':
        ell((cx-34,cy-14,cx+12,cy+26),body); ell((cx+5,cy-34,cx+33,cy-7),body); ell((cx+11,cy-26,cx+31,cy-9),lt); eye(cx+25,cy-24)
        line([(cx-30,cy+5),(cx-45,cy-7),(cx-48,cy+12),(cx-39,cy+20)],dk,5); line([(cx-10,cy+20),(cx-18,cy+41)],dk,5); line([(cx+4,cy+20),(cx+10,cy+41)],dk,5); return
    if kind=='lion':
        ell((cx-34,cy-13,cx+12,cy+26),body); ell((cx+5,cy-38,cx+38,cy-4),dk); ell((cx+11,cy-32,cx+34,cy-9),body); eye(cx+29,cy-24)
        line([(cx-10,cy+20),(cx-17,cy+43)],dk,5); line([(cx+5,cy+20),(cx+10,cy+43)],dk,5); return
    if kind=='tiger':
        ell((cx-37,cy-13,cx+14,cy+26),body); ell((cx+7,cy-35,cx+35,cy-7),body); eye(cx+29,cy-25)
        for x in (cx-22,cx-8,cx+5): line([(x,cy-9),(x+4,cy+7)],dk,3)
        line([(cx-12,cy+21),(cx-18,cy+43)],dk,5); line([(cx+5,cy+20),(cx+10,cy+43)],dk,5); return
    if kind=='bear':
        ell((cx-37,cy-18,cx+15,cy+29),body); ell((cx+6,cy-39,cx+37,cy-8),body); ell((cx+10,cy-44,cx+20,cy-34),body); ell((cx+27,cy-44,cx+37,cy-34),body); eye(cx+30,cy-28)
        line([(cx-12,cy+24),(cx-16,cy+43)],dk,6); line([(cx+6,cy+23),(cx+10,cy+43)],dk,6); return
    ell((cx-31,cy-14,cx+10,cy+24),body); ell((cx+4,cy-34,cx+33,cy-6),body)
    if kind=='rabbit':
        ell((cx+8,cy-58,cx+17,cy-28),lt); ell((cx+21,cy-58,cx+30,cy-28),lt)
    elif kind=='cat':
        poly([(cx+8,cy-31),(cx+11,cy-49),(cx+20,cy-34)],body); poly([(cx+25,cy-33),(cx+31,cy-48),(cx+34,cy-28)],body); line([(cx-28,cy+2),(cx-43,cy-7),(cx-46,cy-23)],dk,4)
    elif kind=='dog':
        poly([(cx+8,cy-29),(cx+4,cy-45),(cx+17,cy-32)],dk); poly([(cx+30,cy-30),(cx+39,cy-43),(cx+34,cy-24)],dk)
    elif kind=='mouse':
        ell((cx+8,cy-40,cx+20,cy-28),lt); ell((cx+24,cy-40,cx+36,cy-28),lt); line([(cx-31,cy),(cx-48,cy-8),(cx-52,cy-20)],dk,3)
    eye(cx+28,cy-24); line([(cx-12,cy+20),(cx-17,cy+42)],dk,4); line([(cx+4,cy+20),(cx+9,cy+42)],dk,4)

def bird(cx,cy,body,kind='bird'):
    dk=mix(body,.62); lt=tuple(min(255,int(v*1.15)) for v in body); ground(cx,cy)
    if kind=='flamingo':
        ell((cx-8,cy-38,cx+15,cy-15),body); ell((cx-23,cy-12,cx+15,cy+18),body); line([(cx-8,cy+13),(cx-8,cy+43)],body,3); line([(cx+4,cy+13),(cx+4,cy+43)],body,3); poly([(cx+11,cy-31),(cx+27,cy-27),(cx+12,cy-21)],dk); eye(cx+5,cy-31); return
    if kind=='penguin':
        ell((cx-24,cy-42,cx+24,cy+35),(55,58,70)); ell((cx-14,cy-28,cx+14,cy+26),(248,244,226)); poly([(cx+21,cy-25),(cx+34,cy-18),(cx+21,cy-11)],(232,165,54)); eye(cx+10,cy-28); return
    ell((cx-30,cy-17,cx+12,cy+25),body); ell((cx+3,cy-37,cx+30,cy-8),body); eye(cx+24,cy-27); poly([(cx+27,cy-22),(cx+42,cy-17),(cx+27,cy-12)],(231,165,62))
    if kind=='owl':
        ell((cx+6,cy-31,cx+17,cy-20),lt); ell((cx+18,cy-31,cx+29,cy-20),lt)
    if kind=='parrot': ell((cx-20,cy-7,cx+2,cy+17),(77,153,186))
    line([(cx-7,cy+21),(cx-7,cy+40)],dk,3); line([(cx+3,cy+20),(cx+3,cy+40)],dk,3)

def fish(cx,cy,body,kind='fish'):
    ground(cx,cy)
    if kind=='dolphin':
        poly([(cx-48,cy),(cx-22,cy-20),(cx+25,cy-17),(cx+44,cy-2),(cx+20,cy+15),(cx-22,cy+17)],body); poly([(cx+4,cy-18),(cx+12,cy-31),(cx+18,cy-16)],body); poly([(cx-46,cy),(cx-60,cy-15),(cx-56,cy+3)],body); eye(cx+29,cy-7); return
    if kind=='whale':
        ell((cx-43,cy-20,cx+28,cy+23),body); poly([(cx-39,cy),(cx-57,cy-14),(cx-53,cy+10)],body); eye(cx+18,cy-7); line([(cx+25,cy-18),(cx+33,cy-28)],(105,165,199),2); return
    if kind=='shark':
        poly([(cx-46,cy),(cx-18,cy-22),(cx+33,cy-16),(cx+48,cy),(cx+31,cy+17),(cx-18,cy+20)],body); poly([(cx,cy-21),(cx+9,cy-35),(cx+15,cy-19)],body); poly([(cx-44,cy),(cx-60,cy-15),(cx-55,cy+5)],body); eye(cx+29,cy-6); return
    poly([(cx-43,cy),(cx-16,cy-22),(cx+31,cy-16),(cx+44,cy),(cx+30,cy+17),(cx-16,cy+22)],body); poly([(cx-42,cy),(cx-58,cy-15),(cx-53,cy+5)],body); eye(cx+27,cy-6)

def turtle(cx,cy,land=False):
    ground(cx,cy); shell=(116,166,92) if not land else (157,129,83); skin=(139,186,104) if not land else (174,146,98); dk=mix(shell,.65)
    ell((cx-36,cy-20,cx+27,cy+27),shell); ell((cx+22,cy-10,cx+44,cy+9),skin); eye(cx+37,cy-3)
    for ox,oy in [(-25,-18),(-25,22),(10,-20),(10,24)]: ell((cx+ox-5,cy+oy-4,cx+ox+5,cy+oy+4),skin)
    line([(cx-20,cy-10),(cx+10,cy+18)],dk,2); line([(cx+14,cy-8),(cx-12,cy+18)],dk,2)

def reptile(cx,cy,kind):
    ground(cx,cy)
    if kind=='snake':
        body=(108,171,91); pts=[(cx-46,cy+12),(cx-31,cy-4),(cx-15,cy+10),(cx,cy-5),(cx+15,cy+9),(cx+30,cy-3)]; line(pts,body,11); ell((cx+27,cy-10,cx+48,cy+9),body); eye(cx+41,cy-3); line([(cx+48,cy),(cx+56,cy-3)],(200,82,73),2); return
    if kind=='crocodile':
        body=(101,158,91); dk=mix(body,.62); poly([(cx-48,cy+8),(cx-25,cy-12),(cx+25,cy-10),(cx+49,cy),(cx+22,cy+16),(cx-25,cy+17)],body); poly([(cx-47,cy+8),(cx-62,cy-3),(cx-57,cy+17)],body); eye(cx+37,cy-4)
        for x in (-15,0,15): poly([(cx+x,cy-10),(cx+x+4,cy-21),(cx+x+8,cy-9)],dk)
        return
    if kind=='frog':
        body=(91,173,82); ell((cx-29,cy-12,cx+29,cy+28),body); ell((cx-31,cy-28,cx-13,cy-10),body); ell((cx+13,cy-28,cx+31,cy-10),body); eye(cx-22,cy-21); eye(cx+22,cy-21); line([(cx-10,cy+7),(cx,cy+13),(cx+10,cy+7)],mix(body,.6),2); return
    body=(111,170,98); dk=mix(body,.62); ell((cx-24,cy-9,cx+20,cy+18),body); ell((cx+16,cy-18,cx+36,cy+1),body); eye(cx+30,cy-11); line([(cx-20,cy+1),(cx-45,cy-8)],dk,5); line([(cx-10,cy+15),(cx-27,cy+29)],dk,4); line([(cx+8,cy+14),(cx+24,cy+29)],dk,4)
    if kind=='salamander':
        for ox in (-10,4,17): ell((cx+ox-3,cy+2,cx+ox+3,cy+8),(225,132,74))

def octopus(cx,cy):
    ground(cx,cy); body=(137,103,190); ell((cx-27,cy-36,cx+27,cy+8),body); eye(cx-9,cy-20); eye(cx+9,cy-20)
    for i in range(6):
        x=cx-26+i*10; line([(x,cy+4),(x-4,cy+24),(x+2,cy+39)],body,5)

def crab(cx,cy):
    ground(cx,cy); body=(225,108,82); ell((cx-27,cy-8,cx+27,cy+23),body); eye(cx-9,cy-8); eye(cx+9,cy-8)
    for s in (-1,1):
        line([(cx+s*24,cy),(cx+s*41,cy-13)],body,4); ell((cx+s*48-7,cy-22,cx+s*48+7,cy-8),body)

def draw(i,key):
    r=i//COLS; c=i%COLS; cx=c*CW+CW//2; cy=r*CH+CH//2-2
    table={
'dog':lambda:mammal(cx,cy,(210,145,79),'dog'),'cat':lambda:mammal(cx,cy,(224,133,74),'cat'),'rabbit':lambda:mammal(cx,cy,(194,190,183),'rabbit'),'hamster':lambda:mammal(cx,cy,(211,163,88),'hamster'),'mouse':lambda:mammal(cx,cy,(166,166,171),'mouse'),'turtle':lambda:turtle(cx,cy),
'horse':lambda:mammal(cx,cy,(184,112,64),'horse'),'cow':lambda:mammal(cx,cy,(236,230,209),'cow'),'pig':lambda:mammal(cx,cy,(232,151,158),'pig'),'sheep':lambda:mammal(cx,cy,(175,145,111),'sheep'),'goat':lambda:mammal(cx,cy,(193,171,125),'goat'),'chicken':lambda:bird(cx,cy,(228,132,64)),
'lion':lambda:mammal(cx,cy,(221,154,67),'lion'),'tiger':lambda:mammal(cx,cy,(225,138,49),'tiger'),'bear':lambda:mammal(cx,cy,(137,86,57),'bear'),'elephant':lambda:mammal(cx,cy,(145,151,160),'elephant'),'giraffe':lambda:mammal(cx,cy,(222,168,74),'giraffe'),'monkey':lambda:mammal(cx,cy,(145,94,64),'monkey'),
'eagle':lambda:bird(cx,cy,(109,78,55)),'owl':lambda:bird(cx,cy,(167,121,78),'owl'),'parrot':lambda:bird(cx,cy,(88,167,92),'parrot'),'duck':lambda:bird(cx,cy,(219,177,69)),'penguin':lambda:bird(cx,cy,(57,58,68),'penguin'),'flamingo':lambda:bird(cx,cy,(228,127,146),'flamingo'),
'fish':lambda:fish(cx,cy,(82,161,190)),'shark':lambda:fish(cx,cy,(119,143,160),'shark'),'dolphin':lambda:fish(cx,cy,(93,158,194),'dolphin'),'whale':lambda:fish(cx,cy,(102,133,169),'whale'),'octopus':lambda:octopus(cx,cy),'crab':lambda:crab(cx,cy),
'snake':lambda:reptile(cx,cy,'snake'),'crocodile':lambda:reptile(cx,cy,'crocodile'),'lizard':lambda:reptile(cx,cy,'lizard'),'frog':lambda:reptile(cx,cy,'frog'),'salamander':lambda:reptile(cx,cy,'salamander'),'tortoise':lambda:turtle(cx,cy,True)}
    table[key]()

keys=['dog','cat','rabbit','hamster','mouse','turtle','horse','cow','pig','sheep','goat','chicken','lion','tiger','bear','elephant','giraffe','monkey','eagle','owl','parrot','duck','penguin','flamingo','fish','shark','dolphin','whale','octopus','crab','snake','crocodile','lizard','frog','salamander','tortoise']
for i,k in enumerate(keys): draw(i,k)
img.save('assets/picture-labels/study-animals-v5.webp','WEBP',quality=91,method=6)
print('saved',img.size)
