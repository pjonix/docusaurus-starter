

许多的数学问题可以使用未知数表示某些量，并用这些未知数将题目中的等量或不等量关系用数学语言表示出来，从而获得包括了原题目信息的方程或不等式，当获得了代数表达式并确定它能够表示题目中的所有信息后，我们仅需要对表达式进行求解即可，对于这种求解，我们有着丰富而强大的数学工具.

这里，对于线性(多元一次)方程组和一元二次方程组的解法不再进行赘述.值得强调的一个概念是==次(阶)==，它的意思是方程中最多有几个未知数进行了乘法运算.

## 方程变换 | Algebraic Manipulation

### 等式整体加减

一个常见的化简做法是将方程左右分别相加或相乘，获得一个用于化简原方程的等式.

`例1` 
$$
\begin{array}{l}
2 v+w+x+y+z=4 \\
v+2 w+x+y+z=5 \\
v+w+2 x+y+z=6 \\
v+w+x+2 y+z=7 \\
v+w+x+y+2 z=8
\end{array}
$$

**提示** 将所有式子相加得到(\*)并用每一个方程减去(\*)即可解得未知数.

这种方法对非线性的方程也是常用的.

`例2` 
$$
\begin{array}{l}
a(a+b)=108\\
b(a+b)=297/4.
\end{array}
$$

**提示** 答案为$(8,11/2)$或 $(-8，-11/2)$.

`练习` 
$$
\begin{array}{l}
xy=12\sqrt{6}\\
yz=54\sqrt{2}\\
zx=48\sqrt{3}\end{array}
$$

### 形式对称性

如果方程或给出的条件有形式对称性(即几个变量交换顺序之后仍然是原条件)，则可以用通分，或者等式相加减等方式进行化简求解

`例1` If $x+y+z=6$ and $x y z=2$, then find$\dfrac{1}{x y}+\dfrac{1}{y z}+\dfrac{1}{z x}$

**提示** 简单通分即可.

`例2[AMC10-2012A-24]`  $a, b,c$ 是正整数，且 $a \geq b \geq c$ 满足下列方程组，求 $a$的值.
$$
a^{2}-b^{2}-c^{2}+a b=2011\\
a^{2}+3 b^{2}+3 c^{2}-3 a b-2 a c-2 b c=-1997
$$

**提示** 两式相加，得到 $2a^2+2b^2+2c^2-2ab-2bc-2ac=14$，可以进行配方得到$(a-b)^2+(b-c)^2+(a-c)^2=14=9+4+1$，而这分别是三个正整数之间差值的平方，从而通过假设$a-c=3,a-b=1$或$a-c=3,a-b=2$可以求出a的两个解.

- [ ] [TODO]

### 高阶韦达定理

- [ ] [TODO]

对于以下这种不同阶的方程

`例` 
$$
\begin{equation}
\begin{cases}
a+b+c=1 \\
ab+bc+ac=2 \\
abc=3\label{ref2}\tag{1}
\end{cases}
\end{equation}
$$

此外，因式分解也是一种常用的方程变换，许多问题$\ref{ref2}$可以通过因式分解的方式将其变成两式相乘的形式进行化简，由于因式分解的技巧较多，这里单列一节.


## 因式分解 | Factorization

### 基础复习 | Basics

`提取公因式` $f(x)g(x)+h(x)g(x)=\left[f(x)+h(x)\right]\cdot g(x)$.

`十字相乘 | Cross multiplication` $ab x^2+(ad+bc)x+cd=(ax+b)(cx+d)$.

### 分解公式

`Simon's Favourite Factoring Trick(SFFT)` 实际上，可以看成是十字相乘法的一个形式，但是这个形式常常有它特定的用途，如例2中用于计算整数根的数目.
$$
\begin{array}{c}
a b+a+b+1&=&(a+1)(b+1) \\
a b-a-b+1&=&(a-1)(b-1)\\
\end{array}
$$

`例1` 用SFFT处理$4ab+6a+10b$.

**解** $=4(ab+\dfrac 3 2 a+\dfrac 5 2 b)=4\left[(a+\dfrac 5 2)(b+\dfrac3 2)-\dfrac {15} 4\right]=(2a+5)(2b+3)-15$.

`例2` 有多少组整数$(a,b)$满足$ab+a+b=5$？

**解** 用SFFT，得到$(a+1)(b+1)=6$，因此只要考虑6有几种因式分解即可，注意考虑负整数的情况，答案为8.
`平方差公式` $a^{2}-b^{2}=(a-b)(a+b)$.
`立方差公式` $a^{3}+b^{3}=(a+b)(a^{2}-a b+b^{2})$

`$n$阶差公式` 以上两个公式是$n$阶差公式中$n=2,3$的情况.
$$
x^{n}-a^{n}=(x-a)(x^{n-1}+x^{n-2} a+x^{n-3} a^{2}+\cdots+a^{n-1})
$$

`立方和公式` $a^{3}-b^{3}=(a-b)(a^{2}+a b+b^{2})$.

`$n$阶展开公式` 立方和公式是$n$阶和公式中$n=3$的情况，该式仅当 $n$ 为奇数时成立.
$$
x^{n}+a^{n}=(x+a)(x^{n-1}-x^{n-2} a+x^{n-3} a^{2}-\cdots+a^{n-1})
$$

`$a^3+b^3+c^3$` 在$a^3+b^3$的分解中，我们可以看到它是将$(a+b)^3$展开式中的$a^2+2ab+b^2$ 替换为了 $a^2-ab+b^2$，用类似的思路可以获得以下展开式，注意由于项数的变化，它会有一个多余的项$3abc$.
$$
a^3+b^3+c^3=(a+b+c)(a^2+b^2+c^2-ab-bc-ac)+3abc
$$

除了直接地用于因式分解，有时候，这些公式也可能成为求解数列或方程问题中的中间步骤.

`例` 
$$
\begin{equation}
\begin{cases}
a+b+c=1 &&(1)\\
a^2+b^2+c^2=2 &&(2)\\
a^3+b^3+c^3=3 &&(3)
\end{cases}
\end{equation}
$$

**提示** 按公式展开(3)式，直接展开(2)式，$ab+bc+ac$看成一个整体.答案为$\dfrac16$.

### 待定系数法 | Undeterminated coefficients

通过**假设因式分解的形式**，设系数为未知数，可以将因式分解化为解方程组问题

`例1` 因式分解 $x^3-4x^2+2x+1$.

**解** $\begin{aligned}&x^3-4x^2+2x+1\\&=(x+a)(x^2+bx+c)\\&=x^3+(a+b)x^2+(ab+c)x+ac.\end{aligned}$

由于每一项前面的系数对应相等，有 $a+b=-4,ab+c=2,ac=1$.
从而 $a=-1,b=-3,c=-1$，原式可以化为$(x-1)(x^2-3x-1)$.

这个方法还常常用于二元二次多项式.



`例2` $x^2+3xy+2y^2+4x+5y+3$

**提示** 我们可以假设这样的因式分解形式 $(ax+by+c)(dx+ey+f)$,但是这样有六个未知数，解方程组比较困难，由于二次项的分解方法比较有限，因此可以先将二次项进行因式分解，得到$x^2+3xy+2y^2=(x+y)(x+2y)$，则待定的系数化简为$(x+y+c)(x+2y+f)$，此时再展开，解方程的工作量就小上许多.

或者，求解形如$x^2=a+b\sqrt{c}$ 的方程时，可以设 $x=u+v\sqrt{c}$，平方后求解方程组

`例3[AMC10-2013B-19]` The real numbers $c, b, a$ form an arithmetic sequence with $a \geq b \geq c \geq 0$. The quadratic $a x^{2}+b x+c$ has exactly one root. What is this root?

**提示** 形成等差数列有等差中项性质，有且仅有一个根对应判别式为$0$.

### 变量替换/换元法 | Variable substitution

在分解复杂的因式时，将部分复杂式子视为一个新变量有助于寻找规律，或者使用上面提到的分解公式.

`例1` 因式分解 $\left(x^{2}+x+1\right)\left(x^{2}+x+2\right)-12$.

**解** 令 $y=x^{2}+x$，我们可以得到化简的形式，从而进一步进行因式分解
$$
\begin{array}{l}
\left(x^{2}+x+1\right)\left(x^{2}+x+2\right)-12 \\
=(y+1)(y+2)-12 \\
=y^{2}+3 y-10 \\
=(y+5)(y-2) \\
=\left(x^{2}+x+5\right)\left(x^{2}+x-2\right) \\
=\left(x^{2}+x+5\right)(x+2)(x-1)
\end{array}
$$

`例2` $\left(x^{2}+3 x+2\right)\left(4 x^{2}+8 x+3\right)-90$.

**解一** 注意到$x$的高次方项都有因数$2$，低次方项都有因数$5x$，且$4x^4=(2x^2)^2,$将$2x^2$和$5x$提取出来，发现正好可以变为一个平方的形式，最后用十字分解法分解常数项.
$$
\begin{array}{l}
\left(x^{2}+3 x+2\right)\left(4 x^{2}+8 x+3\right)-90\\
=4 x^{4}+20 x^{3}+35 x^{2}+25 x-84 \\
=\left(2 x^{2}\right)^{2}+2 \cdot 2 x^{2} \cdot 5 x+(5 x)^{2}+10 x^{2}+25 x-84 \\
=\left(2 x^{2}+5 x\right)^{2}+10 x^{2}+25 x-84 \\
=\left(2 x^{2}+5 x\right)^{2}+5 \cdot\left(2 x^{2}+5 x\right)-84 \\
=\left(2 x^{2}+5 x+12\right)\left(2 x^{2}+5 x-7\right)
\end{array}
$$

**解二** 将两个相乘括号先分别因式分解，并交换相乘顺序得到仅常数项不同的两个因式，再通过换元将常数项进行分解.
$$
\begin{aligned}
&\left(x^{2}+3 x+2\right)\left(4 x^{2}+8 x+3\right)-90\\
&=(x+1)(x+2)(2 x+1)(2 x+3)-90\\
&=[(x+1)(2 x+3)] \cdot[(x+2)(2 x+1)]-90\\
&=\left(2 x^{2}+5 x+3\right)\left(2 x^{2}+5 x+2\right)-90
\end{aligned}
$$
令$t=2 x^{2}+5 x+3$，得到
$$
t(t-1)-90=t^{2}-t-90=(t-10)(t+9)
$$
即$\left(2 x^{2}+5 x+12\right)\left(2 x^{2}+5 x-7\right)$.

### 分组分解 | Grouping

`例` $x^3+x^2-\dfrac 1 {x^2} +\dfrac 1 {x^3}$ 

**提示** 将$x^3,\dfrac 1 {x^3}$视为一组，用立方和公式，剩下的$x^2,\dfrac 1 {x^2}$用平方差公式

> 注：因式分解有时候不作为单独的题目出现，但可能是解题过程中的关键步骤.在竞赛中，因式分解的形式可能比较复杂，并需要用到多种方法进行分解.

### 练习

1. Two non-zero real numbers, $a$ and $b$, satisfy $a b=a-b .$ Find a possible value of $\dfrac{a}{b}+\dfrac{b}{a}-a b$
2. If $x+\dfrac{1}{x}=4$, then what is the value of $x^{8}+\dfrac{1}{x^{8}} ?$
3. Let $a$ and $b$ be relatively prime integers with $a>b>0$ and $\dfrac{a^{3}-b^{3}}{(a-b)^{3}}=\dfrac{73}{3}$. What is $a-b ?$
4. If $\left(a-\dfrac{1}{a}\right)^{2}=4$, what is the absolute value of $a^{3}-\dfrac{1}{a^{3}}$ ?
5. Compute$\dfrac{\left(10^{4}+324\right)\left(22^{4}+324\right)\left(34^{4}+324\right)\left(46^{4}+324\right)\left(58^{4}+324\right)}{\left(4^{4}+324\right)\left(16^{4}+324\right)\left(28^{4}+324\right)\left(40^{4}+324\right)\left(52^{4}+324\right)}$.

> 如果你感觉对这一章还没有熟练掌握，可以在[David的代数讲义](https://davidaltizio.web.illinois.edu/Algebraic Manipulations Part II.pdf)找到更多的例子.











> 以下题目先不用管

**Problem 1** [2007 AMC 12] How many non-congruent right triangles with positive integer leg lengths have areas that are numerically equal to 3 times their perimeters?

**Problem 2** [1998 AIME] An $m \times n \times p$ rectangular box has half the volume of an $(m+2) \times(n+2) \times(p+2)$ rectangular box, where $m, n$, and $p$ are integers, and $m \leq n \leq p .$ What is the largest possible value of $p$?

**Problem 3** [2005 BMO] The integer $N$ is positive. There are exactly 2005 ordered pairs $(x, y)$ of positive integers satisfying:
$$
\dfrac{1}{x}+\dfrac{1}{y}=\dfrac{1}{N}
$$
Prove that $N$ is a perfect square.

**Problem 4** [2003 JBMO $]$ Let $n$ be a positive integer. A number $A$ consists of $2 n$ digits, each of which is 4 ; and a number $B$ consists of $n$ digits, each of which is $8 .$ Prove that $A+2 B+4$ is a perfect square.

**Problem 5** [2000 AIME] The system of equations
$$
\begin{aligned}
\log _{10}(2000 x y)-\left(\log _{10} x\right)\left(\log _{10} y\right) &=4 \\
\log _{10}(2 y z)-\left(\log _{10} y\right)\left(\log _{10} z\right) &=1 \\
\log _{10}(z x)-\left(\log _{10} z\right)\left(\log _{10} x\right) &=0
\end{aligned}
$$
has two solutions $\left(x_{1}, y_{1}, z_{1}\right)$ and $\left(x_{2}, y_{2}, z_{2}\right) .$ Find $y_{1}+y_{2}$



