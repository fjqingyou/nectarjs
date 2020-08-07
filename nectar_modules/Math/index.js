"!_ffi_include lib/math.h";

var _Math = 
{
    /*** PROPERTIES ***/
    
    E: __NJS_MATH_E,
    LN2: __NJS_MATH_LN2,
    LOG2E: __NJS_MATH_LOG2E,
    LOG10E: __NJS_MATH_LOG10E,
    PI: __NJS_MATH_PI,
    SQRT1_2: __NJS_MATH_SQRT1_2,
    SQRT2: __NJS_MATH_SQRT2,

    /*** END PROPERTIES ***/

    /*** METHODS ***/

    abs: __NJS_MATH_ABS,
	acos: __NJS_MATH_ACOS,
	acosh: __NJS_MATH_ACOSH,
	asin: __NJS_MATH_ASIN,
	asinh: __NJS_MATH_ASINH,
	atan: __NJS_MATH_ATAN,
	atanh: __NJS_MATH_ATANH,
	atan2: __NJS_MATH_ATAN2,
	cbrt: __NJS_MATH_CBRT,
	ceil: __NJS_MATH_CEIL,
	clz32: __NJS_MATH_CLZ32,
	cos: __NJS_MATH_COS,
	cosh: __NJS_MATH_COSH,
	exp: __NJS_MATH_EXP,
	expm1: __NJS_MATH_EXPM1,
	floor: __NJS_MATH_FLOOR,
	fround: __NJS_MATH_FROUND,
    hypot: __NJS_MATH_HYPOT,
    imul: __NJS_MATH_IMUL,
	log: __NJS_MATH_LOG,
	log1p: __NJS_MATH_LOG1P,
	log10: __NJS_MATH_LOG10,
	log2: __NJS_MATH_LOG2,
	max: __NJS_MATH_MAX,
    min: __NJS_MATH_MIN,
    pow: __NJS_MATH_POW,
	random: __NJS_MATH_RANDOM,
	round: __NJS_MATH_ROUND,
	sign: __NJS_MATH_SIGN,
	sin: __NJS_MATH_SIN,
	sinh: __NJS_MATH_SINH,
	sqrt: __NJS_MATH_SQRT,
	tan: __NJS_MATH_TAN,
	tanh: __NJS_MATH_TANH,
    trunc: __NJS_MATH_TRUNC,
    
    /*** END METHODS ***/
    toString: function () { return "[object Math]"; }
};


module.exports = _Math;
