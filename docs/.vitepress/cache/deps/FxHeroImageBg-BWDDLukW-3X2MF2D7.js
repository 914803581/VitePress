import {
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  watch
} from "./chunk-KNEM4EPR.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/@fuxishi/vitepress-theme/dist/chunk/FxHeroImageBg-BWDDLukW.js
import { useData as a, useRoute as o, withBase as s } from "vitepress";

// node_modules/@vibrant/image/dist/esm/histogram.js
var Histogram = class {
  constructor(pixels, opts) {
    this.pixels = pixels;
    this.opts = opts;
    const { sigBits } = opts;
    const getColorIndex = (r2, g22, b22) => (r2 << 2 * sigBits) + (g22 << sigBits) + b22;
    this.getColorIndex = getColorIndex;
    const rshift = 8 - sigBits;
    const hn = 1 << 3 * sigBits;
    const hist = new Uint32Array(hn);
    let rmax;
    let rmin;
    let gmax;
    let gmin;
    let bmax;
    let bmin;
    let r;
    let g2;
    let b2;
    let a2;
    rmax = gmax = bmax = 0;
    rmin = gmin = bmin = Number.MAX_VALUE;
    const n = pixels.length / 4;
    let i = 0;
    while (i < n) {
      const offset = i * 4;
      i++;
      r = pixels[offset + 0];
      g2 = pixels[offset + 1];
      b2 = pixels[offset + 2];
      a2 = pixels[offset + 3];
      if (a2 === 0) continue;
      r = r >> rshift;
      g2 = g2 >> rshift;
      b2 = b2 >> rshift;
      const index = getColorIndex(r, g2, b2);
      if (hist[index] === void 0) hist[index] = 0;
      hist[index] += 1;
      if (r > rmax) rmax = r;
      if (r < rmin) rmin = r;
      if (g2 > gmax) gmax = g2;
      if (g2 < gmin) gmin = g2;
      if (b2 > bmax) bmax = b2;
      if (b2 < bmin) bmin = b2;
    }
    this._colorCount = hist.reduce(
      (total, c) => c > 0 ? total + 1 : total,
      0
    );
    this.hist = hist;
    this.rmax = rmax;
    this.rmin = rmin;
    this.gmax = gmax;
    this.gmin = gmin;
    this.bmax = bmax;
    this.bmin = bmin;
  }
  get colorCount() {
    return this._colorCount;
  }
};

// node_modules/@vibrant/image/dist/esm/index.js
var ImageBase = class {
  scaleDown(opts) {
    const width = this.getWidth();
    const height = this.getHeight();
    let ratio = 1;
    if (opts.maxDimension > 0) {
      const maxSide = Math.max(width, height);
      if (maxSide > opts.maxDimension) ratio = opts.maxDimension / maxSide;
    } else {
      ratio = 1 / opts.quality;
    }
    if (ratio < 1) this.resize(width * ratio, height * ratio, ratio);
  }
};
function applyFilters(imageData, filters) {
  if (filters.length > 0) {
    const pixels = imageData.data;
    const n = pixels.length / 4;
    let offset;
    let r;
    let g2;
    let b2;
    let a2;
    for (let i = 0; i < n; i++) {
      offset = i * 4;
      r = pixels[offset + 0];
      g2 = pixels[offset + 1];
      b2 = pixels[offset + 2];
      a2 = pixels[offset + 3];
      for (let j = 0; j < filters.length; j++) {
        if (!filters[j]?.(r, g2, b2, a2)) {
          pixels[offset + 3] = 0;
          break;
        }
      }
    }
  }
  return imageData;
}

// node_modules/@vibrant/image-browser/dist/esm/index.js
function isRelativeUrl(url) {
  const u2 = new URL(url, location.href);
  return u2.protocol === location.protocol && u2.host === location.host && u2.port === location.port;
}
function isSameOrigin(a2, b2) {
  const ua = new URL(a2);
  const ub = new URL(b2);
  return ua.protocol === ub.protocol && ua.hostname === ub.hostname && ua.port === ub.port;
}
var BrowserImage = class extends ImageBase {
  _getCanvas() {
    if (!this._canvas) {
      throw new Error("Canvas is not initialized");
    }
    return this._canvas;
  }
  _getContext() {
    if (!this._context) {
      throw new Error("Context is not initialized");
    }
    return this._context;
  }
  _getWidth() {
    if (!this._width) {
      throw new Error("Width is not initialized");
    }
    return this._width;
  }
  _getHeight() {
    if (!this._height) {
      throw new Error("Height is not initialized");
    }
    return this._height;
  }
  _initCanvas() {
    const img = this.image;
    if (!img) {
      throw new Error("Image is not initialized");
    }
    const canvas = this._canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) throw new ReferenceError("Failed to create canvas context");
    this._context = context;
    canvas.className = "@vibrant/canvas";
    canvas.style.display = "none";
    this._width = canvas.width = img.width;
    this._height = canvas.height = img.height;
    context.drawImage(img, 0, 0);
    document.body.appendChild(canvas);
  }
  load(image) {
    let img;
    let src;
    if (typeof image === "string") {
      img = document.createElement("img");
      src = image;
      if (!isRelativeUrl(src) && !isSameOrigin(window.location.href, src)) {
        img.crossOrigin = "anonymous";
      }
      img.src = src;
    } else if (image instanceof HTMLImageElement) {
      img = image;
      src = image.src;
    } else {
      return Promise.reject(
        new Error(`Cannot load buffer as an image in browser`)
      );
    }
    this.image = img;
    return new Promise((resolve, reject) => {
      const onImageLoad = () => {
        this._initCanvas();
        resolve(this);
      };
      if (img.complete) {
        onImageLoad();
      } else {
        img.onload = onImageLoad;
        img.onerror = (_e) => reject(new Error(`Fail to load image: ${src}`));
      }
    });
  }
  clear() {
    this._getContext().clearRect(0, 0, this._getWidth(), this._getHeight());
  }
  update(imageData) {
    this._getContext().putImageData(imageData, 0, 0);
  }
  getWidth() {
    return this._getWidth();
  }
  getHeight() {
    return this._getHeight();
  }
  resize(targetWidth, targetHeight, ratio) {
    if (!this.image) {
      throw new Error("Image is not initialized");
    }
    this._width = this._getCanvas().width = targetWidth;
    this._height = this._getCanvas().height = targetHeight;
    this._getContext().scale(ratio, ratio);
    this._getContext().drawImage(this.image, 0, 0);
  }
  getPixelCount() {
    return this._getWidth() * this._getHeight();
  }
  getImageData() {
    return this._getContext().getImageData(
      0,
      0,
      this._getWidth(),
      this._getHeight()
    );
  }
  remove() {
    if (this._canvas && this._canvas.parentNode) {
      this._canvas.parentNode.removeChild(this._canvas);
    }
  }
};

// node_modules/@vibrant/core/dist/esm/utils.js
function assignDeep(target, ...sources) {
  sources.forEach((s2) => {
    if (!s2) return;
    for (const key in s2) {
      if (s2.hasOwnProperty(key)) {
        const v2 = s2[key];
        if (Array.isArray(v2)) {
          target[key] = v2.slice(0);
        } else if (typeof v2 === "object") {
          if (!target[key]) target[key] = {};
          assignDeep(target[key], v2);
        } else {
          target[key] = v2;
        }
      }
    }
  });
  return target;
}

// node_modules/@vibrant/core/dist/esm/options.js
function buildProcessOptions(opts, override) {
  const { colorCount, quantizer, generators, filters } = opts;
  const commonQuantizerOpts = { colorCount };
  const q = typeof quantizer === "string" ? { name: quantizer, options: {} } : quantizer;
  q.options = assignDeep({}, commonQuantizerOpts, q.options);
  return assignDeep(
    {},
    {
      quantizer: q,
      generators,
      filters
    },
    override
  );
}

// node_modules/@vibrant/core/dist/esm/builder.js
var Builder = class {
  /**
   * Arguments are the same as `Vibrant.constructor`.
   */
  constructor(src, opts = {}) {
    this._src = src;
    this._opts = assignDeep({}, Vibrant.DefaultOpts, opts);
  }
  /**
   * Sets `opts.colorCount` to `n`.
   * @returns this `Builder` instance.
   */
  maxColorCount(n) {
    this._opts.colorCount = n;
    return this;
  }
  /**
   * Sets `opts.maxDimension` to `d`.
   * @returns this `Builder` instance.
   */
  maxDimension(d2) {
    this._opts.maxDimension = d2;
    return this;
  }
  /**
   * Adds a filter function
   * @returns this `Builder` instance.
   */
  addFilter(name) {
    if (!this._opts.filters) {
      this._opts.filters = [name];
    } else {
      this._opts.filters.push(name);
    }
    return this;
  }
  /**
   * Removes a filter function.
   * @returns this `Builder` instance.
   */
  removeFilter(name) {
    if (this._opts.filters) {
      const i = this._opts.filters.indexOf(name);
      if (i > 0) this._opts.filters.splice(i);
    }
    return this;
  }
  /**
   * Clear all filters.
   * @returns this `Builder` instance.
   */
  clearFilters() {
    this._opts.filters = [];
    return this;
  }
  /**
   * Sets `opts.quality` to `q`.
   * @returns this `Builder` instance.
   */
  quality(q) {
    this._opts.quality = q;
    return this;
  }
  /**
   * Specifies which `Image` implementation class to use.
   * @returns this `Builder` instance.
   */
  useImageClass(imageClass) {
    this._opts.ImageClass = imageClass;
    return this;
  }
  /**
   * Sets `opts.generator` to `generator`
   * @returns this `Builder` instance.
   */
  useGenerator(generator, options) {
    if (!this._opts.generators) this._opts.generators = [];
    this._opts.generators.push(
      options ? { name: generator, options } : generator
    );
    return this;
  }
  /**
   * Specifies which `Quantizer` implementation class to use
   * @returns this `Builder` instance.
   */
  useQuantizer(quantizer, options) {
    this._opts.quantizer = options ? { name: quantizer, options } : quantizer;
    return this;
  }
  /**
   * Builds and returns a `Vibrant` instance as configured.
   */
  build() {
    return new Vibrant(this._src, this._opts);
  }
  /**
   * Builds a `Vibrant` instance as configured and calls its `getPalette` method.
   */
  getPalette() {
    return this.build().getPalette();
  }
};

// node_modules/@vibrant/core/dist/esm/pipeline/index.js
var Stage = class {
  constructor(pipeline2) {
    this.pipeline = pipeline2;
    this._map = {};
  }
  names() {
    return Object.keys(this._map);
  }
  has(name) {
    return !!this._map[name];
  }
  get(name) {
    return this._map[name];
  }
  register(name, stageFn) {
    this._map[name] = stageFn;
    return this.pipeline;
  }
};
var BasicPipeline = class {
  constructor() {
    this.filter = new Stage(this);
    this.quantizer = new Stage(this);
    this.generator = new Stage(this);
  }
  _buildProcessTasks({
    filters,
    quantizer,
    generators
  }) {
    if (generators.length === 1 && generators[0] === "*") {
      generators = this.generator.names();
    }
    return {
      filters: filters.map((f2) => createTask(this.filter, f2)),
      quantizer: createTask(this.quantizer, quantizer),
      generators: generators.map((g2) => createTask(this.generator, g2))
    };
    function createTask(stage, o2) {
      let name;
      let options;
      if (typeof o2 === "string") {
        name = o2;
      } else {
        name = o2.name;
        options = o2.options;
      }
      return {
        name,
        fn: stage.get(name),
        options
      };
    }
  }
  async process(imageData, opts) {
    const { filters, quantizer, generators } = this._buildProcessTasks(opts);
    const imageFilterData = await this._filterColors(filters, imageData);
    const colors = await this._generateColors(quantizer, imageFilterData);
    const palettes = await this._generatePalettes(generators, colors);
    return {
      colors,
      palettes
    };
  }
  _filterColors(filters, imageData) {
    return Promise.resolve(
      applyFilters(
        imageData,
        filters.map(({ fn }) => fn)
      )
    );
  }
  _generateColors(quantizer, imageData) {
    return Promise.resolve(quantizer.fn(imageData.data, quantizer.options));
  }
  async _generatePalettes(generators, colors) {
    const promiseArr = await Promise.all(
      generators.map(({ fn, options }) => Promise.resolve(fn(colors, options)))
    );
    return Promise.resolve(
      promiseArr.reduce(
        (promises, promiseVal, i) => {
          promises[generators[i].name] = promiseVal;
          return promises;
        },
        {}
      )
    );
  }
};

// node_modules/@vibrant/color/dist/esm/converter.js
function rgbToHex(r, g2, b2) {
  return "#" + ((1 << 24) + (r << 16) + (g2 << 8) + b2).toString(16).slice(1, 7);
}
function rgbToHsl(r, g2, b2) {
  r /= 255;
  g2 /= 255;
  b2 /= 255;
  const max = Math.max(r, g2, b2);
  const min = Math.min(r, g2, b2);
  let h2 = 0;
  let s2 = 0;
  const l2 = (max + min) / 2;
  if (max !== min) {
    const d2 = max - min;
    s2 = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
    switch (max) {
      case r:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r) / d2 + 2;
        break;
      case b2:
        h2 = (r - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return [h2, s2, l2];
}
function hslToRgb(h2, s2, l2) {
  let r;
  let g2;
  let b2;
  function hue2rgb(p2, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p2 + (q - p2) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p2 + (q - p2) * (2 / 3 - t) * 6;
    return p2;
  }
  if (s2 === 0) {
    r = g2 = b2 = l2;
  } else {
    const q = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
    const p2 = 2 * l2 - q;
    r = hue2rgb(p2, q, h2 + 1 / 3);
    g2 = hue2rgb(p2, q, h2);
    b2 = hue2rgb(p2, q, h2 - 1 / 3);
  }
  return [r * 255, g2 * 255, b2 * 255];
}

// node_modules/@vibrant/color/dist/esm/index.js
var Swatch = class _Swatch {
  static applyFilters(colors, filters) {
    return filters.length > 0 ? colors.filter(({ r, g: g2, b: b2 }) => {
      for (let j = 0; j < filters.length; j++) {
        if (!filters[j]?.(r, g2, b2, 255)) return false;
      }
      return true;
    }) : colors;
  }
  /**
   * Make a value copy of a swatch based on a previous one. Returns a new Swatch instance
   * @param {Swatch} swatch
   */
  static clone(swatch) {
    return new _Swatch(swatch._rgb, swatch._population);
  }
  /**
   * The red value in the RGB value
   */
  get r() {
    return this._rgb[0];
  }
  /**
   * The green value in the RGB value
   */
  get g() {
    return this._rgb[1];
  }
  /**
   * The blue value in the RGB value
   */
  get b() {
    return this._rgb[2];
  }
  /**
   * The color value as a rgb value
   */
  get rgb() {
    return this._rgb;
  }
  /**
   * The color value as a hsl value
   */
  get hsl() {
    if (!this._hsl) {
      const [r, g2, b2] = this._rgb;
      this._hsl = rgbToHsl(r, g2, b2);
    }
    return this._hsl;
  }
  /**
   * The color value as a hex string
   */
  get hex() {
    if (!this._hex) {
      const [r, g2, b2] = this._rgb;
      this._hex = rgbToHex(r, g2, b2);
    }
    return this._hex;
  }
  get population() {
    return this._population;
  }
  /**
   * Get the JSON object for the swatch
   */
  toJSON() {
    return {
      rgb: this.rgb,
      population: this.population
    };
  }
  getYiq() {
    if (!this._yiq) {
      const rgb = this._rgb;
      this._yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1e3;
    }
    return this._yiq;
  }
  /**
   * Returns an appropriate color to use for any 'title' text which is displayed over this Swatch's color.
   */
  get titleTextColor() {
    if (!this._titleTextColor) {
      this._titleTextColor = this.getYiq() < 200 ? "#fff" : "#000";
    }
    return this._titleTextColor;
  }
  /**
   * Returns an appropriate color to use for any 'body' text which is displayed over this Swatch's color.
   */
  get bodyTextColor() {
    if (!this._bodyTextColor) {
      this._bodyTextColor = this.getYiq() < 150 ? "#fff" : "#000";
    }
    return this._bodyTextColor;
  }
  /**
   * Internal use.
   * @param rgb `[r, g, b]`
   * @param population Population of the color in an image
   */
  constructor(rgb, population) {
    this._rgb = rgb;
    this._population = population;
  }
};

// node_modules/@vibrant/core/dist/esm/index.js
var _Vibrant = class _Vibrant2 {
  /**
   *
   * @param _src Path to image file (supports HTTP/HTTPs)
   * @param opts Options (optional)
   */
  constructor(_src, opts) {
    this._src = _src;
    this.opts = assignDeep({}, _Vibrant2.DefaultOpts, opts);
  }
  static use(pipeline2) {
    this._pipeline = pipeline2;
  }
  static from(src) {
    return new Builder(src);
  }
  get result() {
    return this._result;
  }
  _process(image, opts) {
    image.scaleDown(this.opts);
    const processOpts = buildProcessOptions(this.opts, opts);
    return _Vibrant2._pipeline.process(image.getImageData(), processOpts);
  }
  async getPalette() {
    const image = new this.opts.ImageClass();
    try {
      const image1 = await image.load(this._src);
      const result1 = await this._process(image1, {
        generators: ["default"]
      });
      this._result = result1;
      const res = result1.palettes["default"];
      if (!res) {
        throw new Error(
          `Something went wrong and a palette was not found, please file a bug against our GitHub repo: https://github.com/vibrant-Colors/node-vibrant/`
        );
      }
      image.remove();
      return res;
    } catch (err) {
      image.remove();
      return Promise.reject(err);
    }
  }
  async getPalettes() {
    const image = new this.opts.ImageClass();
    try {
      const image1 = await image.load(this._src);
      const result1 = await this._process(image1, {
        generators: ["*"]
      });
      this._result = result1;
      const res = result1.palettes;
      image.remove();
      return res;
    } catch (err) {
      image.remove();
      return Promise.reject(err);
    }
  }
};
_Vibrant.DefaultOpts = {
  colorCount: 64,
  quality: 5,
  filters: []
};
var Vibrant = _Vibrant;

// node_modules/node-vibrant/dist/esm/configs/config.js
Vibrant.DefaultOpts.quantizer = "mmcq";
Vibrant.DefaultOpts.generators = ["default"];
Vibrant.DefaultOpts.filters = ["default"];

// node_modules/node-vibrant/dist/esm/configs/browser.js
Vibrant.DefaultOpts.ImageClass = BrowserImage;

// node_modules/@vibrant/quantizer-mmcq/dist/esm/vbox.js
var SIGBITS = 5;
var RSHIFT = 8 - SIGBITS;
var VBox = class _VBox {
  constructor(r1, r2, g1, g2, b1, b2, histogram) {
    this.histogram = histogram;
    this._volume = -1;
    this._avg = null;
    this._count = -1;
    this.dimension = { r1, r2, g1, g2, b1, b2 };
  }
  static build(pixels) {
    const h2 = new Histogram(pixels, { sigBits: SIGBITS });
    const { rmin, rmax, gmin, gmax, bmin, bmax } = h2;
    return new _VBox(rmin, rmax, gmin, gmax, bmin, bmax, h2);
  }
  invalidate() {
    this._volume = this._count = -1;
    this._avg = null;
  }
  volume() {
    if (this._volume < 0) {
      const { r1, r2, g1, g2, b1, b2 } = this.dimension;
      this._volume = (r2 - r1 + 1) * (g2 - g1 + 1) * (b2 - b1 + 1);
    }
    return this._volume;
  }
  count() {
    if (this._count < 0) {
      const { hist, getColorIndex } = this.histogram;
      const { r1, r2, g1, g2, b1, b2 } = this.dimension;
      let c = 0;
      for (let r = r1; r <= r2; r++) {
        for (let g3 = g1; g3 <= g2; g3++) {
          for (let b3 = b1; b3 <= b2; b3++) {
            const index = getColorIndex(r, g3, b3);
            if (!hist[index]) {
              continue;
            }
            c += hist[index];
          }
        }
      }
      this._count = c;
    }
    return this._count;
  }
  clone() {
    const { histogram } = this;
    const { r1, r2, g1, g2, b1, b2 } = this.dimension;
    return new _VBox(r1, r2, g1, g2, b1, b2, histogram);
  }
  avg() {
    if (!this._avg) {
      const { hist, getColorIndex } = this.histogram;
      const { r1, r2, g1, g2, b1, b2 } = this.dimension;
      let ntot = 0;
      const mult = 1 << 8 - SIGBITS;
      let rsum;
      let gsum;
      let bsum;
      rsum = gsum = bsum = 0;
      for (let r = r1; r <= r2; r++) {
        for (let g3 = g1; g3 <= g2; g3++) {
          for (let b3 = b1; b3 <= b2; b3++) {
            const index = getColorIndex(r, g3, b3);
            const h2 = hist[index];
            if (!h2) continue;
            ntot += h2;
            rsum += h2 * (r + 0.5) * mult;
            gsum += h2 * (g3 + 0.5) * mult;
            bsum += h2 * (b3 + 0.5) * mult;
          }
        }
      }
      if (ntot) {
        this._avg = [~~(rsum / ntot), ~~(gsum / ntot), ~~(bsum / ntot)];
      } else {
        this._avg = [
          ~~(mult * (r1 + r2 + 1) / 2),
          ~~(mult * (g1 + g2 + 1) / 2),
          ~~(mult * (b1 + b2 + 1) / 2)
        ];
      }
    }
    return this._avg;
  }
  contains(rgb) {
    let [r, g2, b2] = rgb;
    const { r1, r2, g1, g2: g22, b1, b2: b22 } = this.dimension;
    r >>= RSHIFT;
    g2 >>= RSHIFT;
    b2 >>= RSHIFT;
    return r >= r1 && r <= r2 && g2 >= g1 && g2 <= g22 && b2 >= b1 && b2 <= b22;
  }
  split() {
    const { hist, getColorIndex } = this.histogram;
    const { r1, r2, g1, g2, b1, b2 } = this.dimension;
    const count = this.count();
    if (!count) return [];
    if (count === 1) return [this.clone()];
    const rw = r2 - r1 + 1;
    const gw = g2 - g1 + 1;
    const bw = b2 - b1 + 1;
    const maxw = Math.max(rw, gw, bw);
    let accSum = null;
    let sum;
    let total;
    sum = total = 0;
    let maxd = null;
    if (maxw === rw) {
      maxd = "r";
      accSum = new Uint32Array(r2 + 1);
      for (let r = r1; r <= r2; r++) {
        sum = 0;
        for (let g3 = g1; g3 <= g2; g3++) {
          for (let b3 = b1; b3 <= b2; b3++) {
            const index = getColorIndex(r, g3, b3);
            if (!hist[index]) continue;
            sum += hist[index];
          }
        }
        total += sum;
        accSum[r] = total;
      }
    } else if (maxw === gw) {
      maxd = "g";
      accSum = new Uint32Array(g2 + 1);
      for (let g3 = g1; g3 <= g2; g3++) {
        sum = 0;
        for (let r = r1; r <= r2; r++) {
          for (let b3 = b1; b3 <= b2; b3++) {
            const index = getColorIndex(r, g3, b3);
            if (!hist[index]) continue;
            sum += hist[index];
          }
        }
        total += sum;
        accSum[g3] = total;
      }
    } else {
      maxd = "b";
      accSum = new Uint32Array(b2 + 1);
      for (let b3 = b1; b3 <= b2; b3++) {
        sum = 0;
        for (let r = r1; r <= r2; r++) {
          for (let g3 = g1; g3 <= g2; g3++) {
            const index = getColorIndex(r, g3, b3);
            if (!hist[index]) continue;
            sum += hist[index];
          }
        }
        total += sum;
        accSum[b3] = total;
      }
    }
    let splitPoint = -1;
    const reverseSum = new Uint32Array(accSum.length);
    for (let i = 0; i < accSum.length; i++) {
      const d2 = accSum[i];
      if (!d2) continue;
      if (splitPoint < 0 && d2 > total / 2) splitPoint = i;
      reverseSum[i] = total - d2;
    }
    const vbox = this;
    function doCut(d2) {
      const dim1 = d2 + "1";
      const dim2 = d2 + "2";
      const d1 = vbox.dimension[dim1];
      let d22 = vbox.dimension[dim2];
      const vbox1 = vbox.clone();
      const vbox2 = vbox.clone();
      const left = splitPoint - d1;
      const right = d22 - splitPoint;
      if (left <= right) {
        d22 = Math.min(d22 - 1, ~~(splitPoint + right / 2));
        d22 = Math.max(0, d22);
      } else {
        d22 = Math.max(d1, ~~(splitPoint - 1 - left / 2));
        d22 = Math.min(vbox.dimension[dim2], d22);
      }
      while (!accSum[d22]) d22++;
      let c2 = reverseSum[d22];
      while (!c2 && accSum[d22 - 1]) c2 = reverseSum[--d22];
      vbox1.dimension[dim2] = d22;
      vbox2.dimension[dim1] = d22 + 1;
      return [vbox1, vbox2];
    }
    return doCut(maxd);
  }
};

// node_modules/@vibrant/quantizer-mmcq/dist/esm/pqueue.js
var PQueue = class {
  _sort() {
    if (!this._sorted) {
      this.contents.sort(this._comparator);
      this._sorted = true;
    }
  }
  constructor(comparator) {
    this._comparator = comparator;
    this.contents = [];
    this._sorted = false;
  }
  push(item) {
    this.contents.push(item);
    this._sorted = false;
  }
  peek(index) {
    this._sort();
    index = typeof index === "number" ? index : this.contents.length - 1;
    return this.contents[index];
  }
  pop() {
    this._sort();
    return this.contents.pop();
  }
  size() {
    return this.contents.length;
  }
  map(mapper) {
    this._sort();
    return this.contents.map(mapper);
  }
};

// node_modules/@vibrant/quantizer-mmcq/dist/esm/index.js
var fractByPopulations = 0.75;
function _splitBoxes(pq, target) {
  let lastSize = pq.size();
  while (pq.size() < target) {
    const vbox = pq.pop();
    if (vbox && vbox.count() > 0) {
      const [vbox1, vbox2] = vbox.split();
      if (!vbox1) break;
      pq.push(vbox1);
      if (vbox2 && vbox2.count() > 0) pq.push(vbox2);
      if (pq.size() === lastSize) {
        break;
      } else {
        lastSize = pq.size();
      }
    } else {
      break;
    }
  }
}
var MMCQ = (pixels, opts) => {
  if (pixels.length === 0 || opts.colorCount < 2 || opts.colorCount > 256) {
    throw new Error("Wrong MMCQ parameters");
  }
  const vbox = VBox.build(pixels);
  vbox.histogram.colorCount;
  const pq = new PQueue((a2, b2) => a2.count() - b2.count());
  pq.push(vbox);
  _splitBoxes(pq, fractByPopulations * opts.colorCount);
  const pq2 = new PQueue(
    (a2, b2) => a2.count() * a2.volume() - b2.count() * b2.volume()
  );
  pq2.contents = pq.contents;
  _splitBoxes(pq2, opts.colorCount - pq2.size());
  return generateSwatches(pq2);
};
function generateSwatches(pq) {
  const swatches = [];
  while (pq.size()) {
    const v2 = pq.pop();
    const color = v2.avg();
    const [r, g2, b2] = color;
    swatches.push(new Swatch(color, v2.count()));
  }
  return swatches;
}

// node_modules/@vibrant/generator-default/dist/esm/index.js
var DefaultOpts = {
  targetDarkLuma: 0.26,
  maxDarkLuma: 0.45,
  minLightLuma: 0.55,
  targetLightLuma: 0.74,
  minNormalLuma: 0.3,
  targetNormalLuma: 0.5,
  maxNormalLuma: 0.7,
  targetMutesSaturation: 0.3,
  maxMutesSaturation: 0.4,
  targetVibrantSaturation: 1,
  minVibrantSaturation: 0.35,
  weightSaturation: 3,
  weightLuma: 6.5,
  weightPopulation: 0.5
};
function _findMaxPopulation(swatches) {
  let p2 = 0;
  swatches.forEach((s2) => {
    p2 = Math.max(p2, s2.population);
  });
  return p2;
}
function _isAlreadySelected(palette, s2) {
  return palette.Vibrant === s2 || palette.DarkVibrant === s2 || palette.LightVibrant === s2 || palette.Muted === s2 || palette.DarkMuted === s2 || palette.LightMuted === s2;
}
function _createComparisonValue(saturation, targetSaturation, luma, targetLuma, population, maxPopulation, opts) {
  function weightedMean(...values) {
    let sum = 0;
    let weightSum = 0;
    for (let i = 0; i < values.length; i += 2) {
      const value = values[i];
      const weight = values[i + 1];
      if (!value || !weight) continue;
      sum += value * weight;
      weightSum += weight;
    }
    return sum / weightSum;
  }
  function invertDiff(value, targetValue) {
    return 1 - Math.abs(value - targetValue);
  }
  return weightedMean(
    invertDiff(saturation, targetSaturation),
    opts.weightSaturation,
    invertDiff(luma, targetLuma),
    opts.weightLuma,
    population / maxPopulation,
    opts.weightPopulation
  );
}
function _findColorVariation(palette, swatches, maxPopulation, targetLuma, minLuma, maxLuma, targetSaturation, minSaturation, maxSaturation, opts) {
  let max = null;
  let maxValue = 0;
  swatches.forEach((swatch) => {
    const [, s2, l2] = swatch.hsl;
    if (s2 >= minSaturation && s2 <= maxSaturation && l2 >= minLuma && l2 <= maxLuma && !_isAlreadySelected(palette, swatch)) {
      const value = _createComparisonValue(
        s2,
        targetSaturation,
        l2,
        targetLuma,
        swatch.population,
        maxPopulation,
        opts
      );
      if (max === null || value > maxValue) {
        max = swatch;
        maxValue = value;
      }
    }
  });
  return max;
}
function _generateVariationColors(swatches, maxPopulation, opts) {
  const palette = {
    Vibrant: null,
    DarkVibrant: null,
    LightVibrant: null,
    Muted: null,
    DarkMuted: null,
    LightMuted: null
  };
  palette.Vibrant = _findColorVariation(
    palette,
    swatches,
    maxPopulation,
    opts.targetNormalLuma,
    opts.minNormalLuma,
    opts.maxNormalLuma,
    opts.targetVibrantSaturation,
    opts.minVibrantSaturation,
    1,
    opts
  );
  palette.LightVibrant = _findColorVariation(
    palette,
    swatches,
    maxPopulation,
    opts.targetLightLuma,
    opts.minLightLuma,
    1,
    opts.targetVibrantSaturation,
    opts.minVibrantSaturation,
    1,
    opts
  );
  palette.DarkVibrant = _findColorVariation(
    palette,
    swatches,
    maxPopulation,
    opts.targetDarkLuma,
    0,
    opts.maxDarkLuma,
    opts.targetVibrantSaturation,
    opts.minVibrantSaturation,
    1,
    opts
  );
  palette.Muted = _findColorVariation(
    palette,
    swatches,
    maxPopulation,
    opts.targetNormalLuma,
    opts.minNormalLuma,
    opts.maxNormalLuma,
    opts.targetMutesSaturation,
    0,
    opts.maxMutesSaturation,
    opts
  );
  palette.LightMuted = _findColorVariation(
    palette,
    swatches,
    maxPopulation,
    opts.targetLightLuma,
    opts.minLightLuma,
    1,
    opts.targetMutesSaturation,
    0,
    opts.maxMutesSaturation,
    opts
  );
  palette.DarkMuted = _findColorVariation(
    palette,
    swatches,
    maxPopulation,
    opts.targetDarkLuma,
    0,
    opts.maxDarkLuma,
    opts.targetMutesSaturation,
    0,
    opts.maxMutesSaturation,
    opts
  );
  return palette;
}
function _generateEmptySwatches(palette, _maxPopulation, opts) {
  if (!palette.Vibrant && !palette.DarkVibrant && !palette.LightVibrant) {
    if (!palette.DarkVibrant && palette.DarkMuted) {
      let [h2, s2, l2] = palette.DarkMuted.hsl;
      l2 = opts.targetDarkLuma;
      palette.DarkVibrant = new Swatch(hslToRgb(h2, s2, l2), 0);
    }
    if (!palette.LightVibrant && palette.LightMuted) {
      let [h2, s2, l2] = palette.LightMuted.hsl;
      l2 = opts.targetDarkLuma;
      palette.DarkVibrant = new Swatch(hslToRgb(h2, s2, l2), 0);
    }
  }
  if (!palette.Vibrant && palette.DarkVibrant) {
    let [h2, s2, l2] = palette.DarkVibrant.hsl;
    l2 = opts.targetNormalLuma;
    palette.Vibrant = new Swatch(hslToRgb(h2, s2, l2), 0);
  } else if (!palette.Vibrant && palette.LightVibrant) {
    let [h2, s2, l2] = palette.LightVibrant.hsl;
    l2 = opts.targetNormalLuma;
    palette.Vibrant = new Swatch(hslToRgb(h2, s2, l2), 0);
  }
  if (!palette.DarkVibrant && palette.Vibrant) {
    let [h2, s2, l2] = palette.Vibrant.hsl;
    l2 = opts.targetDarkLuma;
    palette.DarkVibrant = new Swatch(hslToRgb(h2, s2, l2), 0);
  }
  if (!palette.LightVibrant && palette.Vibrant) {
    let [h2, s2, l2] = palette.Vibrant.hsl;
    l2 = opts.targetLightLuma;
    palette.LightVibrant = new Swatch(hslToRgb(h2, s2, l2), 0);
  }
  if (!palette.Muted && palette.Vibrant) {
    let [h2, s2, l2] = palette.Vibrant.hsl;
    l2 = opts.targetMutesSaturation;
    palette.Muted = new Swatch(hslToRgb(h2, s2, l2), 0);
  }
  if (!palette.DarkMuted && palette.DarkVibrant) {
    let [h2, s2, l2] = palette.DarkVibrant.hsl;
    l2 = opts.targetMutesSaturation;
    palette.DarkMuted = new Swatch(hslToRgb(h2, s2, l2), 0);
  }
  if (!palette.LightMuted && palette.LightVibrant) {
    let [h2, s2, l2] = palette.LightVibrant.hsl;
    l2 = opts.targetMutesSaturation;
    palette.LightMuted = new Swatch(hslToRgb(h2, s2, l2), 0);
  }
}
var DefaultGenerator = ((swatches, opts) => {
  opts = Object.assign({}, DefaultOpts, opts);
  const maxPopulation = _findMaxPopulation(swatches);
  const palette = _generateVariationColors(swatches, maxPopulation, opts);
  _generateEmptySwatches(palette, maxPopulation, opts);
  return palette;
});

// node_modules/node-vibrant/dist/esm/pipeline/index.js
var pipeline = new BasicPipeline().filter.register(
  "default",
  (r, g2, b2, a2) => a2 >= 125 && !(r > 250 && g2 > 250 && b2 > 250)
).quantizer.register("mmcq", MMCQ).generator.register("default", DefaultGenerator);

// node_modules/node-vibrant/dist/esm/browser.js
Vibrant.use(pipeline);

// node_modules/@fuxishi/vitepress-theme/dist/chunk/FxHeroImageBg-BWDDLukW.js
var l = "fx-hero-colors";
function u() {
  try {
    let e = localStorage.getItem(l);
    return e ? JSON.parse(e) : null;
  } catch {
    return null;
  }
}
function d(e) {
  try {
    localStorage.setItem(l, JSON.stringify(e));
  } catch {
  }
}
function f(e) {
  return [
    e.Vibrant,
    e.DarkVibrant,
    e.LightVibrant,
    e.Muted,
    e.DarkMuted,
    e.LightMuted
  ].filter(Boolean);
}
function p(e) {
  return e.slice().sort((e2, t) => e2.hsl[0] - t.hsl[0]).map((e2) => e2.hex);
}
function m(e) {
  let t = f(e);
  if (t.length === 0) return "-webkit-linear-gradient(-45deg, #bd34fe 50%, #47caff 50%)";
  let n = p(t);
  return `conic-gradient(from 0deg, ${[...n, n[0]].join(", ")})`;
}
function h(e, t) {
  let n = Math.abs(e - t);
  return Math.min(n, 360 - n);
}
function g(e) {
  let t = f(e);
  if (t.length < 2) return "linear-gradient(120deg, #bd34fe, #41d1ff)";
  let n = -1, r = [t[0].hex, t[1].hex];
  for (let e2 = 0; e2 < t.length; e2++) for (let i = e2 + 1; i < t.length; i++) {
    let a2 = h(t[e2].hsl[0], t[i].hsl[0]);
    a2 > n && (n = a2, r = [t[e2].hex, t[i].hex]);
  }
  return `linear-gradient(120deg, ${r[0]}, ${r[1]})`;
}
function _(e) {
  return `${parseInt(e.slice(1, 3), 16)}, ${parseInt(e.slice(3, 5), 16)}, ${parseInt(e.slice(5, 7), 16)}`;
}
function v(e) {
  let t = f(e);
  if (t.length < 2) return ["189, 52, 254", "65, 209, 255"];
  let n = -1, r = [t[0], t[1]];
  for (let e2 = 0; e2 < t.length; e2++) for (let i = e2 + 1; i < t.length; i++) {
    let a2 = h(t[e2].hsl[0], t[i].hsl[0]);
    a2 > n && (n = a2, r = [t[e2], t[i]]);
  }
  return [_(r[0].hex), _(r[1].hex)];
}
function y() {
  return document.documentElement.classList.contains("dark");
}
function b(e) {
  let [t, n] = v(e);
  return {
    imageGradient: m(e),
    nameGradient: g(e),
    beamC1: t,
    beamC2: n
  };
}
function x(e) {
  let t = document.documentElement;
  t.style.setProperty("--vp-home-hero-image-background-image", e.imageGradient), t.style.setProperty("--vp-home-hero-name-background", e.nameGradient), t.style.setProperty("--fx-beam-c1", e.beamC1), t.style.setProperty("--fx-beam-c2", e.beamC2);
}
function S(e) {
  let t = document.documentElement;
  t.style.setProperty("--fx-beam-c1", e.beamC1), t.style.setProperty("--fx-beam-c2", e.beamC2);
}
var C = defineComponent({
  props: { heroImageColor: {
    type: Boolean,
    default: false
  } },
  render: () => null,
  setup(e) {
    if (!e.heroImageColor) return;
    let f2 = null, p2 = o(), { frontmatter: m2, site: h2 } = a();
    function g2() {
      let e2 = document.documentElement;
      e2.style.removeProperty("--vp-home-hero-image-background-image"), e2.style.removeProperty("--vp-home-hero-name-background"), e2.style.removeProperty("--fx-beam-c1"), e2.style.removeProperty("--fx-beam-c2");
    }
    function _2(e2) {
      return y() ? e2.dark || e2.light : e2.light || e2.dark;
    }
    function v2(e2) {
      let t = u();
      return !t || !t.images ? false : e2 && (e2.light && t.images.light && e2.light !== t.images.light || e2.dark && t.images.dark && e2.dark !== t.images.dark) ? (localStorage.removeItem(l), true) : false;
    }
    function C2() {
      let e2 = u();
      if (!e2) return false;
      let t = _2(e2);
      return t ? (x(t), true) : false;
    }
    function w() {
      let e2 = u();
      if (!e2) return false;
      let t = _2(e2);
      return t ? (S(t), true) : false;
    }
    function T() {
      return m2.value.fxHeroImages || {};
    }
    async function E(e2, t) {
      let n = e2.src;
      if (n) try {
        let e3 = b(await Vibrant.from(n).quality(1).getPalette());
        (y() && t === "dark" || !y() && t === "light") && x(e3);
        let r = u() || {};
        r[t] = e3, r.images ||= {}, r.images[t] = n, d(r);
      } catch {
      }
    }
    async function D(e2, t) {
      try {
        let n = b(await Vibrant.from(e2).quality(1).getPalette()), r = u() || {};
        return r[t] = n, r.images ||= {}, r.images[t] = e2, d(r), n;
      } catch {
        return null;
      }
    }
    async function O(e2, t = true) {
      if (!e2.light && !e2.dark) return;
      let n = {};
      if (e2.light) {
        let r = await D(t ? s(e2.light) : e2.light, "light");
        r && (n.light = r);
      }
      if (e2.dark) {
        let r = await D(t ? s(e2.dark) : e2.dark, "dark");
        r && (n.dark = r);
      }
      if (n.light || n.dark) {
        let e3 = y() ? n.dark || n.light : n.light || n.dark;
        e3 && x(e3);
      }
    }
    async function k() {
      let e2 = T();
      if (e2.light || e2.dark) {
        await O(e2);
        return;
      }
      try {
        let e3 = await (await fetch(window.location.origin + h2.value.base)).text(), t = new DOMParser().parseFromString(e3, "text/html").querySelectorAll(".VPHero .image-container img.VPImage"), n = {};
        t.forEach((e4) => {
          let t2 = e4.getAttribute("src");
          t2 && (e4.classList.contains("dark") ? n.dark = t2 : n.light = t2);
        }), (n.light || n.dark) && await O(n, false);
      } catch {
      }
    }
    function A() {
      let e2 = document.querySelector(".VPHero .image-container img.VPImage.light"), t = document.querySelector(".VPHero .image-container img.VPImage.dark");
      e2 || t ? (e2 && e2.complete && e2.naturalWidth > 0 ? E(e2, "light") : e2 && e2.addEventListener("load", () => E(e2, "light"), { once: true }), t && t.complete && t.naturalWidth > 0 ? E(t, "dark") : t && t.addEventListener("load", () => E(t, "dark"), { once: true })) : (g2(), w(), k());
    }
    onMounted(() => {
      v2(T()), C2() || k(), A(), f2 = new MutationObserver((e2) => {
        for (let t of e2) if (t.attributeName === "class") {
          w(), A();
          break;
        }
      }), f2.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"]
      });
    }), watch(() => p2.path, () => {
      nextTick(A);
    }), onBeforeUnmount(() => {
      f2?.disconnect(), g2();
    });
  }
});
export {
  C as default
};
//# sourceMappingURL=FxHeroImageBg-BWDDLukW-3X2MF2D7.js.map
