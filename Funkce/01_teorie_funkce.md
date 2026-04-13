# 1 Funkce jako matematický pojem

---

## Co je závislost veličin?
<span style="float:right; font-size:0.8em; color:gray;">Zdroj: str. 9</span>

V matematice má slovo **funkce** specifický význam – je to patrně **nejvýznamnější pojem novověké matematiky**. Nejprve si připomeňme, co víme o veličinách a jejich závislostech.

### Příklady závislostí z běžného života

- Cena autobusové jízdenky závisí na **délce trasy**.
- Dráha při pohybu stálou rychlostí závisí na **době pohybu**.
- Výška rtutového sloupce teploměru závisí na **okolní teplotě**.
- Délka noci závisí na **ročním období**.

> Každá taková závislost vyjadřuje **vzájemný vztah dvou nebo více veličin**. V matematice se věnujeme veličinám, které je možné **změřit** – tj. vyjádřit čísly v určitých jednotkách.

### Přímá a nepřímá úměrnost

**Přímo úměrné** jsou například:
- délka strany čtverce a jeho obvod
- ujetá dráha a doba jízdy při pohybu stálou rychlostí

**Nepřímo úměrné** jsou například:
- rychlost auta a čas potřebný k překonání dané vzdálenosti
- počet pracovníků a doba potřebná ke splnění úkolu (při stejné výkonnosti)

> V tomto sešitě budeme studovat rozmanité závislosti veličin, kdy **jedna veličina závisí na jediné jiné veličině**.

---

## Jak se funkce určuje a zapisuje vzorcem?
<span style="float:right; font-size:0.8em; color:gray;">Zdroj: str. 10–12</span>

### Příklad: obvod čtverce

Závislost obvodu $o$ čtverce na délce $a$ jeho strany popisuje vzorec:

$$o = 4a$$

- **Nezávisle proměnná** $a$ – můžeme ji měnit libovolně (délka strany).
- **Závisle proměnná** $o$ – mění se v závislosti na $a$ (obvod).

V matematice obvykle „odhlížíme" od geometrické/fyzikální podstaty a všímáme si **číselných hodnot**:
- Nezávisle proměnnou značíme **$x$**
- Závisle proměnnou značíme **$y$**

> **„Proměnná $y$ je funkcí proměnné $x$"** – stručněji **„$y$ je funkcí $x$"**.

### Obecný zápis funkce

$$y = f(x)$$

Čteme: „ypsilon se rovná ef iks." Písmeno $f$ je **označení funkce** a zároveň vzorce (pravidla, předpisu) pro výpočet hodnoty $y$ z hodnoty $x$.

**Příklady funkcí daných vzorcem:**

$$f(x) = 2x + 3, \quad f(x) = x^2 - 2, \quad f(x) = \frac{1}{x}$$

Pro rozlišení více funkcí používáme i jiná písmena nebo indexy:

$$g(x) = x - 3, \quad h(x) = \frac{2}{x-1}, \quad f_1(x) = 1 - x^2, \quad f_2(x) = -5x$$

### Funkční hodnota

V zápisu $y = f(x)$ závorky **vyznačují místo pro nezávisle proměnnou** – lze tam zapsat písmeno i konkrétní hodnotu.

**Vzorový příklad:** Pro funkci $f(x) = 2x + 3$:

| $x$ | výpočet | $f(x)$ |
|-----|---------|--------|
| $2$ | $f(2) = 2 \cdot 2 + 3$ | $7$ |
| $0$ | $f(0) = 2 \cdot 0 + 3$ | $3$ |
| $7$ | $f(7) = 2 \cdot 7 + 3$ | $17$ |
| $-3$ | $f(-3) = 2 \cdot (-3) + 3$ | $-3$ |
| $\frac{1}{2}$ | $f\!\left(\frac{1}{2}\right) = 2 \cdot \frac{1}{2} + 3$ | $4$ |

> Říkáme, že číslo $7$ je **hodnota funkce $f$ v čísle $2$**, neboli funkce $f$ **nabývá** v čísle $2$ **hodnoty** $7$, neboli funkce $f$ **přiřazuje** číslu $2$ číslo $7$.

### Zjištění, pro které $x$ má funkce danou hodnotu

Ze vzorce $f(x) = 2x + 3$ zjistíme, ve kterém $x$ funkce nabývá hodnoty $15$:

$$2x + 3 = 15 \implies x = 6$$

Tedy $f(6) = 15$ a $f(x) \neq 15$ pro každé $x \neq 6$.

### Zápisy funkce

1. **$f: y = 2x + 3$** – čteme „funkce ef je dána vzorcem: $y = 2x + 3$" (určuje i označení závisle proměnné)
2. **$f: x \mapsto 2x + 3$** – čteme „funkce ef přiřazuje proměnné $x$ hodnotu $2x + 3$"

---

## Jiné způsoby zadání funkce
<span style="float:right; font-size:0.8em; color:gray;">Zdroj: str. 13–14</span>

Funkci nemusíme vždy zadat vzorcem. Existují i jiné způsoby:

### 1. Zadání grafem

<!-- Shutterstock: graf průběhu teploty vzduchu v Brně od 8 do 20 hodin, spojitá křivka s maximem kolem 16 °C ve 14 h -->

**Příklad:** Průběh teploty vzduchu v Brně během jednoho dne (8–20 h).

- **Nezávisle proměnná:** čas $x \in \langle 8, 20 \rangle$ (v hodinách)
- **Závisle proměnná:** teplota $y \in \langle 5, 16 \rangle$ (ve °C)
- Funkci nelze zapsat vzorcem, ale přesto je to funkce: $y = f(x)$

### 2. Zadání tabulkou

Při měření teploty jen v celých sudých hodinách:

| $x$ | $8$ | $10$ | $12$ | $14$ | $16$ | $18$ | $20$ |
|-----|-----|------|------|------|------|------|------|
| $g(x)$ | $5$ | $12{,}5$ | $15$ | $16$ | $15{,}5$ | $15$ | $14$ |

- Definiční obor: $x \in \{8, 10, 12, 14, 16, 18, 20\}$
- Tabulkou lze zadat funkci jen tehdy, je-li množina hodnot $x$ **konečná**.

> **Praktická omezení:** U grafu – funkční hodnoty jen s jistou přesností. U tabulky – jen pro konečnou (a „malou") množinu hodnot $x$.

---

## Co je definiční obor funkce?
<span style="float:right; font-size:0.8em; color:gray;">Zdroj: str. 14–17</span>

> **K zadání funkce $y = f(x)$ patří také určení množiny všech hodnot nezávisle proměnné $x$.** Tuto množinu nazýváme **definiční obor funkce $f$** a značíme ji **$D$** (popř. $D(f)$ nebo $D_f$).

### Obecný zápis

$$y = f(x), \quad x \in D$$

Pro $x \in D$ říkáme, že funkce $f$ je **definována v čísle $x$**.

### Dohoda o definičním oboru

Není-li definiční obor u funkce dané vzorcem uveden, považuje se za něj **množina všech reálných čísel $x$, která lze do vzorce dosadit**.

### Příklady určení definičního oboru

**Příklad 1:** $f_1: y = \dfrac{1}{x}$

Za $x$ lze dosadit každé reálné číslo **kromě $0$**:

$$D(f_1) = (-\infty, 0) \cup (0, +\infty)$$

<!-- Shutterstock: číselná osa s vyznačeným prázdným bodem v nule a dvěma intervaly doleva a doprava -->

**Příklad 2:** $f_2: y = \dfrac{1}{x} + \dfrac{1}{x+1}$

Není definována pro $x = 0$ a $x = -1$:

$$D(f_2) = (-\infty, -1) \cup (-1, 0) \cup (0, +\infty)$$

**Příklad 3:** $f_3: y = \sqrt{x}$

Výraz $\sqrt{x}$ je definován jen pro $x \geq 0$:

$$D(f_3) = \langle 0, +\infty)$$

### Vzorový příklad 1: Určete definiční obor funkce
<span style="float:right; font-size:0.8em; color:gray;">Zdroj: str. 16–17</span>

**a)** $f: y = \dfrac{1}{x^2 - 3x - 4}$

**Řešení:**
$$x^2 - 3x - 4 \neq 0$$
$$x^2 - 3x - 4 = 0 \implies (x+1)(x-4) = 0 \implies x_1 = -1, \; x_2 = 4$$
$$\boxed{D(f) = (-\infty, -1) \cup (-1, 4) \cup (4, +\infty)}$$

**b)** $f: y = \sqrt{7 - 3x}$

**Řešení:**
$$7 - 3x \geq 0 \implies -3x \geq -7 \implies x \leq \frac{7}{3}$$
$$\boxed{D(f) = \left(-\infty, \frac{7}{3}\right\rangle}$$

### Definiční obor vymezený okolnostmi

Někdy je definiční obor vymezen geometrickým nebo fyzikálním kontextem:

- **Obvod čtverce:** $f: y = 4x, \; x \in (0, +\infty)$ – délka strany musí být kladná
- **Cena rohlíků:** $g: y = 1{,}4 \cdot x, \; x \in \mathbb{N}$ – počet rohlíků je přirozené číslo
- **Bonbony v sáčku:** $h: y = 20 - x, \; x \in \{0, 1, 2, \ldots, 20\}$ – konečný definiční obor

---

## Co je graf funkce?
<span style="float:right; font-size:0.8em; color:gray;">Zdroj: str. 18–24</span>

> **Grafem funkce $y = f(x)$, $x \in D$,** je v dané pravoúhlé soustavě souřadnic **množina všech bodů $[x, f(x)]$**, kde $x \in D$.

### Bod na grafu

Bod $T$ na grafu má souřadnice $T[x_1, f(x_1)]$. Definiční obor $D$ je množina $x$-ových souřadnic všech bodů grafu.

<!-- Shutterstock: souřadnicová soustava s křivkou grafu funkce a vyznačeným bodem T s průmětem na osu x a y -->

### Graf funkce s konečným definičním oborem

Funkce $g$ daná tabulkou:

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|-----|------|------|-----|-----|-----|
| $g(x)$ | $1$ | $3$ | $0$ | $-1$ | $2$ |

Graf: $G = \{A_1, A_2, A_3, A_4, A_5\}$ — konečná množina bodů.

<!-- Shutterstock: souřadnicová soustava s pěti izolovanými body odpovídajícími tabulce funkce g -->

### Funkce se „skoky" (signum)

Příklad funkce $y = s(x)$:
- $s(x) = -1$ pro $x < 0$
- $s(x) = 0$ pro $x = 0$
- $s(x) = 1$ pro $x > 0$

<!-- Shutterstock: graf funkce signum se dvěma vodorovnými polopřímkami a prázdnými kroužky v bodech (0, -1) a (0, 1), plným bodem v (0, 0) -->

### Kdy čára NENÍ grafem funkce

Čára není grafem funkce, pokud existují **dva body se stejnou $x$-ovou souřadnicí a různými $y$-ovými souřadnicemi** – tj. jedné hodnotě $x$ by odpovídaly dvě různé funkční hodnoty.

<!-- Shutterstock: souřadnicová soustava s uzavřenou křivkou (např. elipsa), která protíná svislou přímku ve dvou bodech A a B -->

> **Klíčová vlastnost funkce:** Každé hodnotě nezávisle proměnné (z definičního oboru) je funkcí přiřazena **jediná** hodnota závisle proměnné.

### Graf funkce $y = 2x$

<!-- Shutterstock: tři grafy funkce y = 2x s různými definičními obory: pro x ∈ ℤ (izolované body), pro x ∈ ⟨-1, 2⟩ (úsečka), pro x ∈ (-∞, 1⟩ (polopřímka) -->

Stejný vzorec $y = 2x$ může mít **různé grafy** podle definičního oboru:

| Funkce | Definiční obor | Charakter grafu |
|--------|---------------|----------------|
| $y = 2x, \; x \in \mathbb{R}$ | celá množina $\mathbb{R}$ | celá přímka |
| $y = 2x, \; x \in \mathbb{Z}$ | celá čísla | izolované body |
| $y = 2x, \; x \in \langle -1, 2 \rangle$ | uzavřený interval | úsečka |
| $y = 2x, \; x \in (-\infty, 1\rangle$ | polouzavřený interval | polopřímka |

### Praktické poznámky ke kreslení grafů

- Někdy je výhodné použít **různé jednotky** na osách (např. pro $f: y = 100x$).
- Pokud je graf „daleko" od os, kreslíme **rovnoběžky s osami** poblíž grafu a popisujeme je hodnotami souřadnic.

---

## Shrnutí
<span style="float:right; font-size:0.8em; color:gray;">Zdroj: str. 25</span>

> **Definice:** Předpokládejme, že je dána neprázdná množina $D$ reálných čísel. Říkáme, že $f$ je **funkce s definičním oborem $D$**, je-li každému číslu $x$ z množiny $D$ přiřazeno (obvykle vzorcem, grafem nebo tabulkou) **jediné reálné číslo $y$**. Toto číslo $y$ se nazývá **hodnota funkce $f$ v čísle $x$** a značí se $f(x)$.

$$y = f(x), \quad x \in D$$
