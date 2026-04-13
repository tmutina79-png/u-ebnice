const EX = [
  // ============================== VÝKLAD (02_priklady_vyklad.html) ==============================
  {id:1, src:'Výklad', t:'Příklad 1 (str. 12)', q:'Vypočtěte f(3), je-li: a) f: y = x + 2  b) f: y = 2 − 3x  c) f: y = x²  d) f: y = 3x² − 1  e) f: y = 1/x  f) f: y = √(x + 1)', s:[
    {l:'a) f: y = x + 2', v:'f(3) = 3 + 2 = 5'},
    {l:'b) f: y = 2 − 3x', v:'f(3) = 2 − 3·3 = 2 − 9 = −7'},
    {l:'c) f: y = x²', v:'f(3) = 3² = 9'},
    {l:'d) f: y = 3x² − 1', v:'f(3) = 3·3² − 1 = 27 − 1 = 26'},
    {l:'e) f: y = 1/x', v:'f(3) = ⅓'},
    {l:'f) f: y = √(x + 1)', v:'f(3) = √(3 + 1) = √4 = 2'}
  ]},

  {id:2, src:'Výklad', t:'Příklad 2 (str. 12)', q:'Je dána funkce g: y = x² + 5. Vypočtěte: a) g(0)  b) g(1)  c) g(5)  d) g(−1)  e) g(−5)  f) g(½)  g) g(−½)  h) g(−√2)', s:[
    {l:'a) g(0)', v:'0² + 5 = 5'},
    {l:'b) g(1)', v:'1² + 5 = 6'},
    {l:'c) g(5)', v:'5² + 5 = 30'},
    {l:'d) g(−1)', v:'(−1)² + 5 = 6'},
    {l:'e) g(−5)', v:'(−5)² + 5 = 30'},
    {l:'f) g(½)', v:'(½)² + 5 = ¼ + 5 = 21/4 = 5¼'},
    {l:'g) g(−½)', v:'(−½)² + 5 = ¼ + 5 = 21/4 = 5¼'},
    {l:'h) g(−√2)', v:'(−√2)² + 5 = 2 + 5 = 7'}
  ]},

  {id:3, src:'Výklad', t:'Příklad 3 (str. 12)', q:'Je dána funkce f: y = 3x + 5. Určete, pro které x platí: a) f(x) = 8  b) f(x) = 0  c) f(x) = −2  d) f(x) = ½', s:[
    {l:'a) f(x) = 8', v:'3x + 5 = 8 → 3x = 3 → x = 1'},
    {l:'b) f(x) = 0', v:'3x + 5 = 0 → 3x = −5 → x = −5/3'},
    {l:'c) f(x) = −2', v:'3x + 5 = −2 → 3x = −7 → x = −7/3'},
    {l:'d) f(x) = ½', v:'3x + 5 = ½ → 3x = −9/2 → x = −3/2'}
  ]},

  {id:4, src:'Výklad', t:'Příklad 4 (str. 12)', q:'Doplňte tabulku pro funkci f: y = 4 − 3x.\nx:   −1   ?    0    ?    1\nf(x): ?   −1   ?    0    ?', s:[
    {l:'Dosazení známých x', v:'f(−1) = 4 − 3·(−1) = 7;  f(0) = 4;  f(1) = 4 − 3 = 1'},
    {l:'Určení x pro známé f(x)', v:'f(x) = −1: 4 − 3x = −1 → x = 5/3;  f(x) = 0: 4 − 3x = 0 → x = 4/3'},
    {l:'Výsledek', v:'x: −1, 5/3, 0, 4/3, 1 → f(x): 7, −1, 4, 0, 1'}
  ]},

  {id:5, src:'Výklad', t:'Příklad 5 (str. 12)', q:'Zapište vzorcem y = f(x) funkci f vyjadřující, že čtverec o straně x metrů má obvod y centimetrů.', s:[
    {l:'Úvaha o jednotkách', v:'Strana: x m = 100x cm. Obvod: 4·100x = 400x cm.'},
    {l:'Výsledek', v:'f: y = 400x'}
  ]},

  {id:6, src:'Výklad', t:'Příklad 6 (str. 17)', q:'Určete definiční obor funkce: a) f: y = 2/(x+3)  b) f: y = 1/(2−x)  c) f: y = 1/(2x+1)  d) f: y = (x²−1)/(x²−4x+4)  e) f: y = 1/(5x²+6x)  f) f: y = (3x−4)/(x²−5x+6)  g) f: y = √(x−7)  h) f: y = √(8−3x)', s:[
    {l:'a) y = 2/(x+3)', v:'x + 3 ≠ 0 → x ≠ −3; D(f) = (−∞, −3) ∪ (−3, +∞)'},
    {l:'b) y = 1/(2−x)', v:'2 − x ≠ 0 → x ≠ 2; D(f) = (−∞, 2) ∪ (2, +∞)'},
    {l:'c) y = 1/(2x+1)', v:'2x + 1 ≠ 0 → x ≠ −½; D(f) = (−∞, −½) ∪ (−½, +∞)'},
    {l:'d) y = (x²−1)/(x²−4x+4)', v:'x² − 4x + 4 = (x−2)² ≠ 0 → x ≠ 2; D(f) = (−∞, 2) ∪ (2, +∞)'},
    {l:'e) y = 1/(5x²+6x)', v:'x(5x+6) ≠ 0 → x ≠ 0 a x ≠ −6/5; D(f) = (−∞, −6/5) ∪ (−6/5, 0) ∪ (0, +∞)'},
    {l:'f) y = (3x−4)/(x²−5x+6)', v:'(x−2)(x−3) ≠ 0 → x ≠ 2, x ≠ 3; D(f) = (−∞, 2) ∪ (2, 3) ∪ (3, +∞)'},
    {l:'g) y = √(x−7)', v:'x − 7 ≥ 0 → x ≥ 7; D(f) = ⟨7, +∞)'},
    {l:'h) y = √(8−3x)', v:'8 − 3x ≥ 0 → x ≤ 8/3; D(f) = (−∞, 8/3⟩'}
  ]},

  {id:7, src:'Výklad', t:'Příklad 7 (str. 21)', q:'Rozhodněte, zda na obrázku je graf některé funkce: a) křivka  b) ležatá parabola. (Tip: Použijte test svislou přímkou.)', s:[
    {l:'Graf:', v:'Dva obrázky – a) hladká rostoucí křivka, b) ležatá parabola'},
    {l:'a) Křivka', v:'Každá svislá přímka protne křivku v nejvýše 1 bodě → ✅ ANO, je to graf funkce.'},
    {l:'b) Ležatá parabola', v:'Existuje svislá přímka (např. x = −2), která protne křivku ve 2 bodech → ❌ NE, není to graf funkce.'}
  ]},

  {id:8, src:'Výklad', t:'Příklad 8 (str. 21)', q:'Rozhodněte, zda daná tabulka zadává funkci:\na) x: 2, −2, √4, 0 → y: −1, 3, −2, 8\nb) x: 4, 5, 6, 7 → y: 5, 8, 8, 8', s:[
    {l:'a) Tabulka se √4', v:'√4 = 2, tedy x = 2 je v tabulce dvakrát (y = −1 a y = −2). ❌ NE – nezadává funkci.'},
    {l:'b) Tabulka s opakujícím se y', v:'Každé x (4,5,6,7) je v tabulce jednou. y = 8 se opakuje, ale to nevadí. ✅ ANO – zadává funkci.'}
  ]},

  {id:9, src:'Výklad', t:'Příklad 9 (str. 24)', q:'Nakreslete graf funkce:\na) f: y = ½x + 1, x ∈ {−2, −1, 0, 1, 2}\nb) f: y = x² − x + 2, x ∈ {−2, −1, 0, 1, 2}', s:[
    {l:'a) Výpočet hodnot y = ½x + 1', v:'f(−2) = 0; f(−1) = ½; f(0) = 1; f(1) = 3/2; f(2) = 2'},
    {l:'Graf:', v:'5 izolovaných bodů: [−2; 0], [−1; ½], [0; 1], [1; 3/2], [2; 2]'},
    {l:'b) Výpočet hodnot y = x² − x + 2', v:'f(−2) = 8; f(−1) = 4; f(0) = 2; f(1) = 2; f(2) = 4'},
    {l:'Graf:', v:'5 izolovaných bodů: [−2; 8], [−1; 4], [0; 2], [1; 2], [2; 4]'}
  ]},

  {id:10, src:'Výklad', t:'Příklad 10 (str. 24)', q:'Z grafu funkce vyčtěte její definiční obor. (Tip: D(f) je průmět grafu na osu x. Pozor na různá měřítka a posunuté osy.)\na) Graf s různými měřítky os (x v setinách, y ve stovkách)\nb) Graf s posunutými osami (x od 10 do 30)', s:[
    {l:'Graf:', v:'a) křivka od x = −0,3 do x = 0,1 (oba plné body); b) křivka od x = 10 do x = 30 (prázdný a plný bod)'},
    {l:'a) Výsledek', v:'D(f) = ⟨−0,3; 0,1⟩'},
    {l:'b) Výsledek', v:'D(f) = (10; 30⟩'}
  ]},

  // ============================== CVIČENÍ (03_cviceni_1.html) ==============================
  {id:11, src:'Cvičení', t:'Příklad 1 (str. 25)', q:'Zapište vzorcem y = f(x) funkci vyjadřující, že\na) čtverec o straně x mm má obsah y mm²,\nb) každému reálnému číslu x je přiřazeno číslo y o 7 větší, než je trojnásobek čísla x,\nc) každému reálnému číslu x je přiřazeno číslo y, které je pětinásobkem jeho druhé mocniny.', s:[
    {l:'a) Obsah čtverce', v:'x · x = x² → f: y = x²'},
    {l:'b) Trojnásobek + 7', v:'3x + 7 → f: y = 3x + 7'},
    {l:'c) Pětinásobek x²', v:'5 · x² → f: y = 5x²'}
  ]},

  {id:12, src:'Cvičení', t:'Příklad 2 (str. 25)', q:'Je dána funkce f: y = 7x − 1. Vypočtěte její hodnotu v čísle:\na) x = 40  b) x = 13  c) x = 7  d) x = −1  e) x = 1/7  f) x = −1/7  g) x = ⅓  h) x = −⅓', s:[
    {l:'a) f(40)', v:'7·40 − 1 = 279'},
    {l:'b) f(13)', v:'7·13 − 1 = 90'},
    {l:'c) f(7)', v:'7·7 − 1 = 48'},
    {l:'d) f(−1)', v:'7·(−1) − 1 = −8'},
    {l:'e) f(1/7)', v:'7·(1/7) − 1 = 0'},
    {l:'f) f(−1/7)', v:'7·(−1/7) − 1 = −2'},
    {l:'g) f(⅓)', v:'7·(⅓) − 1 = 7/3 − 3/3 = 4/3'},
    {l:'h) f(−⅓)', v:'7·(−⅓) − 1 = −7/3 − 3/3 = −10/3'}
  ]},

  {id:13, src:'Cvičení', t:'Příklad 3 (str. 26)', q:'Je dána funkce f: y = (5 − x)/(x + 2). Určete její hodnoty v číslech x ∈ {0, 5, 10, −1, −5, −7} a zapište je do tabulky.', s:[
    {l:'x = 0', v:'f(0) = (5−0)/(0+2) = 5/2 = 2,5'},
    {l:'x = 5', v:'f(5) = (5−5)/(5+2) = 0/7 = 0'},
    {l:'x = 10', v:'f(10) = (5−10)/(10+2) = −5/12'},
    {l:'x = −1', v:'f(−1) = (5+1)/(−1+2) = 6/1 = 6'},
    {l:'x = −5', v:'f(−5) = (5+5)/(−5+2) = 10/(−3) = −10/3'},
    {l:'x = −7', v:'f(−7) = (5+7)/(−7+2) = 12/(−5) = −12/5'}
  ]},

  {id:14, src:'Cvičení', t:'Příklad 4 (str. 26)', q:'Je dána funkce g: y = 7 − 5x. Zjistěte, pro která x platí: a) g(x) = −8  b) g(x) = 5  c) g(x) = 12  d) g(x) = 22', s:[
    {l:'a) g(x) = −8', v:'7 − 5x = −8 → −5x = −15 → x = 3'},
    {l:'b) g(x) = 5', v:'7 − 5x = 5 → −5x = −2 → x = 2/5'},
    {l:'c) g(x) = 12', v:'7 − 5x = 12 → −5x = 5 → x = −1'},
    {l:'d) g(x) = 22', v:'7 − 5x = 22 → −5x = 15 → x = −3'}
  ]},

  {id:15, src:'Cvičení', t:'Příklad 5 (str. 26)', q:'Zapište definiční obor funkce, která je dána tabulkou:\na) x: 0,9; 0,8; 0,7; 0,6; 0,4 → y: 7; 6; 4; 4; 6\nb) x: −8; −4; −1; 3 → y: 7; 16; −8; −2', s:[
    {l:'a) Tabulka s desetinnými čísly', v:'D = {0,4; 0,6; 0,7; 0,8; 0,9}'},
    {l:'b) Tabulka se zápornými čísly', v:'D = {−8; −4; −1; 3}'}
  ]},

  {id:16, src:'Cvičení', t:'Příklad 6 (str. 26)', q:'Určete vzorec a definiční obor funkce, která určuje závislost hodnoty y objemu krychle (v cm³) na hodnotě x délky její hrany (v cm).', s:[
    {l:'Vzorec', v:'Objem krychle o hraně x cm: V = x³ cm³'},
    {l:'Definiční obor', v:'Délka hrany musí být kladná: x > 0'},
    {l:'Výsledek', v:'f: y = x³, x ∈ (0, +∞)'}
  ]},

  {id:17, src:'Cvičení', t:'Příklad 7 (str. 26)', q:'Určete definiční obor funkce dané vzorcem:\na) y = 5x − 6  b) y = 5x/(5x − 6)  c) y = (5x − 6)/1  d) y = 5x/(6x − 5)  e) y = 1/(5x − 6)  f) y = 6/(1 − 5x)', s:[
    {l:'a) y = 5x − 6', v:'D = ℝ'},
    {l:'b) y = 5x/(5x − 6)', v:'5x − 6 ≠ 0 → x ≠ 6/5; D = (−∞, 6/5) ∪ (6/5, +∞)'},
    {l:'c) y = (5x − 6)/1', v:'Jmenovatel = 1 ≠ 0 vždy → D = ℝ'},
    {l:'d) y = 5x/(6x − 5)', v:'6x − 5 ≠ 0 → x ≠ 5/6; D = (−∞, 5/6) ∪ (5/6, +∞)'},
    {l:'e) y = 1/(5x − 6)', v:'5x − 6 ≠ 0 → x ≠ 6/5; D = (−∞, 6/5) ∪ (6/5, +∞)'},
    {l:'f) y = 6/(1 − 5x)', v:'1 − 5x ≠ 0 → x ≠ 1/5; D = (−∞, 1/5) ∪ (1/5, +∞)'}
  ]},

  {id:18, src:'Cvičení', t:'Příklad 8 (str. 26)', q:'Určete definiční obor funkce:\na) f: y = √x  b) f: y = √(x + 2)  c) f: y = √x + 2  d) f: y = √(2x − 1)  e) f: y = √(2x) − 1  f) f: y = √(4 − 5x)', s:[
    {l:'a) y = √x', v:'x ≥ 0; D = ⟨0, +∞)'},
    {l:'b) y = √(x + 2)', v:'x + 2 ≥ 0 → x ≥ −2; D = ⟨−2, +∞)'},
    {l:'c) y = √x + 2', v:'Pod odmocninou je x: x ≥ 0; D = ⟨0, +∞)'},
    {l:'d) y = √(2x − 1)', v:'2x − 1 ≥ 0 → x ≥ ½; D = ⟨½, +∞)'},
    {l:'e) y = √(2x) − 1', v:'2x ≥ 0 → x ≥ 0; D = ⟨0, +∞)'},
    {l:'f) y = √(4 − 5x)', v:'4 − 5x ≥ 0 → x ≤ 4/5; D = (−∞, 4/5⟩'}
  ]},

  {id:19, src:'Cvičení', t:'Příklad 9 (str. 26)', q:'Určete, která čísla x nepatří do definičního oboru funkce:\na) g: y = x²/(x+2)  b) g: y = 1/(x²+9x)  c) g: y = 1/(5x(x−1))  d) g: y = 3x/(25−4x²)  e) g: y = x/(x²+3x−10)  f) g: y = (5−2x)/(x³−5x²+6x)', s:[
    {l:'a) y = x²/(x+2)', v:'x + 2 ≠ 0 → nepatří x = −2'},
    {l:'b) y = 1/(x²+9x)', v:'x(x+9) ≠ 0 → nepatří x = 0 a x = −9'},
    {l:'c) y = 1/(5x(x−1))', v:'5x(x−1) ≠ 0 → nepatří x = 0 a x = 1'},
    {l:'d) y = 3x/(25−4x²)', v:'(5−2x)(5+2x) ≠ 0 → nepatří x = 5/2 a x = −5/2'},
    {l:'e) y = x/(x²+3x−10)', v:'(x+5)(x−2) ≠ 0 → nepatří x = −5 a x = 2'},
    {l:'f) y = (5−2x)/(x³−5x²+6x)', v:'x(x−2)(x−3) ≠ 0 → nepatří x = 0, x = 2 a x = 3'}
  ]},

  {id:20, src:'Cvičení', t:'Příklad 10 (str. 27)', q:'Rozhodněte, zda na obrázku je graf některé funkce:\na) parabola  b) kružnice  c) esovitá křivka  d) svislá přímka\n(Tip: Použijte test svislou přímkou.)', s:[
    {l:'Graf:', v:'Čtyři obrázky – a) parabola, b) kružnice, c) esovitá křivka, d) svislá přímka'},
    {l:'a) Parabola', v:'Každá svislá přímka protne parabolu v nejvýše 1 bodě → ✅ ANO'},
    {l:'b) Kružnice', v:'Svislá přímka středem protne kružnici ve 2 bodech → ❌ NE'},
    {l:'c) Esovitá křivka', v:'Každá svislá přímka protne křivku v nejvýše 1 bodě → ✅ ANO'},
    {l:'d) Svislá přímka', v:'Jedné hodnotě x odpovídá nekonečně hodnot y → ❌ NE'}
  ]},

  {id:21, src:'Cvičení', t:'Příklad 11 (str. 27)', q:'Z grafu funkce vyčtěte její definiční obor. (Pozor na různá měřítka a posunuté osy!)\na) vodorovná čára y = 1 od x = −0,2 do x = 0,35\nb) vlnová křivka od x = −4 do x = 3\nc) stoupající křivka od x = −0,3 do x = 0,4\nd) dvě větve: vodorovná (x od −100 do 0) a stoupající přímka (x od 0 do 75)', s:[
    {l:'Graf:', v:'Čtyři grafy s různými měřítky a posunutými osami'},
    {l:'a) Výsledek', v:'D(f) = ⟨−0,2; 0,35⟩ (oba plné body)'},
    {l:'b) Výsledek', v:'D(f) = ⟨−4; 3) (plný vlevo, prázdný vpravo)'},
    {l:'c) Výsledek', v:'D(f) = ⟨−0,3; 0,4) (plný vlevo, prázdný vpravo)'},
    {l:'d) Výsledek', v:'D(f) = (−100; 0) ∪ ⟨0; 75⟩ = (−100; 75⟩ \\ {0} (dvě větve)'}
  ]},

  {id:22, src:'Cvičení', t:'Příklad 12 (str. 28)', q:'Nakreslete graf funkce:\na) f: y = x² − 3x, x ∈ {−1, −½, 0, 1, 3}\nb) f: y = (3x − 1)/(x + 1), x ∈ {−2, 1, 2, 4, 7}\nc) f: y = x² + 2, x ∈ {−5, −3, −1, 0, 4, 5}', s:[
    {l:'a) Výpočet y = x² − 3x', v:'f(−1)=4; f(−½)=7/4; f(0)=0; f(1)=−2; f(3)=0'},
    {l:'Graf:', v:'5 izolovaných bodů: [−1;4], [−½;7/4], [0;0], [1;−2], [3;0]'},
    {l:'b) Výpočet y = (3x−1)/(x+1)', v:'f(−2)=7; f(1)=1; f(2)=5/3; f(4)=11/5; f(7)=5/2'},
    {l:'Graf:', v:'5 izolovaných bodů: [−2;7], [1;1], [2;5/3], [4;11/5], [7;5/2]'},
    {l:'c) Výpočet y = x² + 2', v:'f(−5)=27; f(−3)=11; f(−1)=3; f(0)=2; f(4)=18; f(5)=27'},
    {l:'Graf:', v:'6 izolovaných bodů: [−5;27], [−3;11], [−1;3], [0;2], [4;18], [5;27]'}
  ]},

  {id:23, src:'Cvičení', t:'Příklad 13 (str. 28)', q:'Na obrázku je grafem zadána po částech lineární funkce y = f(x): prázdný bod [−4; 2], vrcholy [−3; 2], [3; −4], [4; 4], plný bod [5; 4]. Určete:\na) definiční obor, b) průsečíky s osou x, c) hodnoty funkce pro x ∈ {−3,−1,0,1,4,5}, d) průsečík s osou y, e) pro která celá x nabývá f hodnot 2,1,−1,−2,−3, f) celá x, kde f(x) < 0.', s:[
    {l:'Graf:', v:'Po částech lineární funkce: vodorovný úsek y=2, klesající y=−x−1, stoupající y=8x−28, vodorovný y=4'},
    {l:'a) Definiční obor', v:'D(f) = (−4; 5⟩'},
    {l:'b) Průsečíky s osou x', v:'−x−1=0 → x=−1; 8x−28=0 → x=7/2. Body: [−1; 0] a [7/2; 0]'},
    {l:'c) Hodnoty funkce', v:'f(−3)=2; f(−1)=0; f(0)=−1; f(1)=−2; f(4)=4; f(5)=4'},
    {l:'d) Průsečík s osou y', v:'f(0) = −1 → bod [0; −1]'},
    {l:'e) Celá x pro dané hodnoty', v:'f(x)=2: x=−3; f(x)=1: x=−2; f(x)=−1: x=0; f(x)=−2: x=1; f(x)=−3: x=2'},
    {l:'f) Celá x kde f(x) < 0', v:'x ∈ {0, 1, 2, 3}'}
  ]}
];
