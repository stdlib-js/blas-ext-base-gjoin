<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# gjoin

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a string created by joining strided array elements using a specified separator.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import gjoin from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gjoin@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gjoin@esm/index.mjs';
```

#### gjoin( N, separator, x, strideX )

Returns a string created by joining strided array elements using a specified separator.

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0 ];

var str = gjoin( x.length, ',', x, 1 );
// returns '1,2,3,4'
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **separator**: separator.
-   **x**: input array.
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to join every other element:

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];

var str = gjoin( 3, '-', x, 2 );
// returns '1-3-5'
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

// Initial array:
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Create an offset view:
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Join elements:
var str = gjoin( 3, '|', x1, 2 );
// returns '2|4|6'
```

#### gjoin.ndarray( N, separator, x, strideX, offsetX )

Returns a string created by joining strided array elements using a specified separator and alternative indexing semantics.

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0 ];

var str = gjoin.ndarray( x.length, ',', x, 1, 0 );
// returns '1,2,3,4'
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of the strided array:

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];

var str = gjoin.ndarray( 3, '|', x, 1, x.length-3 );
// returns '4|5|6'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return an empty string.
-   If an array element is either `null` or `undefined`, both functions will serialize the element as an empty string.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array-base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@esm/index.mjs';
import gjoin from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gjoin@esm/index.mjs';

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'generic'
});
console.log( x );

var out = gjoin( x.length, ' | ', x, 1 );
console.log( out );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-gjoin.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-gjoin

[test-image]: https://github.com/stdlib-js/blas-ext-base-gjoin/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-gjoin/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-gjoin/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-gjoin?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-gjoin.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-gjoin/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-gjoin/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-gjoin/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-gjoin/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-gjoin/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-gjoin/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-gjoin/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-gjoin/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-gjoin/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor/tree/esm

</section>

<!-- /.links -->
