import QuadraticEquation from './QuadraticEquation';
import FibonacciSequence from './FibonacciSequence';
import ExponentialGraph from './ExponentialGraph';

# 数の図解

このページでは数を図解します。

## n次方程式

:::note NOTE
<math xmlns="http://www.w3.org/1998/Math/MathML">
	<mstyle displaystyle="true" scriptlevel="0" mathsize="18px">
	<mrow>
		<mi>y</mi>
		<mo>=</mo>
		<mi>ax</mi>
		<mo>^</mo>
		<mi>b</mi>
	</mrow>
	</mstyle>
</math>
:::

スライドバーを使って、係数**a**と指数**b**を変更することができます。

<QuadraticEquation />

## フィボナッチ数列

:::note NOTE
<math xmlns="http://www.w3.org/1998/Math/MathML">
	<mstyle displaystyle="true" scriptlevel="0" mathsize="18px">
	<mrow>
		<mi>F</mi>
		<msub>
		<mi>n</mi>
		</msub>
		<mo>=</mo>
		<mfrac linethickness="0">
		<mrow>
			<mn>1</mn>
		</mrow>
		<mrow>
			<msqrt>
			<mn>5</mn>
			</msqrt>
		</mrow>
		</mfrac>
		<mo>(</mo>
		<mrow>
		<mo>(</mo>
		<mfrac>
			<mrow>
			<mn>1</mn>
			<mo>+</mo>
			<msqrt>
				<mn>5</mn>
			</msqrt>
			</mrow>
			<mn>2</mn>
		</mfrac>
		<mo>)</mo>
		<msup>
			<mi>n</mi>
			<mn> </mn>
		</msup>
		<mo>-</mo>
		<mo>(</mo>
		<mfrac>
			<mrow>
			<mn>1</mn>
			<mo>-</mo>
			<msqrt>
				<mn>5</mn>
			</msqrt>
			</mrow>
			<mn>2</mn>
		</mfrac>
		<mo>)</mo>
		<msup>
			<mi>n</mi>
			<mn> </mn>
		</msup>
		</mrow>
		<mo>)</mo>
	</mrow>
	</mstyle>
</math>
:::

スライドバーを使って、数列の長さを変更することができます。

<FibonacciSequence />

## ネイピア数

:::note NOTE
<math xmlns="http://www.w3.org/1998/Math/MathML">
	<mstyle displaystyle="true" scriptlevel="0" mathsize="18px">
	<mi>e</mi>
	<mo>=</mo>
		<mi>&#xFF11;</mi>
		<mo>+</mo>
		<mfrac>
		<mn>1</mn>
		<mrow>
			<mn>1</mn>
			<mo>!</mo>
		</mrow>
		</mfrac>
		<mo>+</mo>
		<mfrac>
		<mn>1</mn>
		<mrow>
			<mn>2</mn>
			<mo>!</mo>
		</mrow>
		</mfrac>
		<mo>+</mo>
		<mfrac>
		<mn>1</mn>
		<mrow>
			<mn>3</mn>
			<mo>!</mo>
		</mrow>
		</mfrac>
		<mo>+</mo>
		<mfrac>
		<mn>1</mn>
		<mrow>
			<mn>4</mn>
			<mo>!</mo>
		</mrow>
		</mfrac>
		<mo>+</mo>
		<mo>&#x22EF;</mo>
	<mo>=</mo>
		<mn>2.71828182845904</mn>
		<mo>&#x22EF;</mo>
	</mstyle>
</math>
:::

スライドバーを使って、数列の長さを変更することができます。

<ExponentialGraph />
