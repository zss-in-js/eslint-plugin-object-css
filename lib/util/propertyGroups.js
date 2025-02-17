// reference: [https://github.com/stormwarning/stylelint-config-recess-order/blob/main/groups.js]
// This code is based on the ISC-licensed repository: stylelint-config-recess-order
// License: ISC

/**
 * @typedef {Object} Group
 * @property {Array<string>} properties
 */

/** @type {Group[]} */
const propertyGroups = [
  {
    properties: ['composes'],
  },
  {
    // Must be first (unless using the above).
    properties: ['all'],
  },
  {
    // Position.
    properties: [
      'position',
      'inset',
      'insetBlock',
      'insetBlockStart',
      'insetBlockEnd',
      'insetInline',
      'insetInlineStart',
      'insetInlineEnd',
      'top',
      'right',
      'bottom',
      'left',
      'zIndex',
    ],
  },
  {
    // Display mode.
    properties: ['boxSizing', 'display'],
  },
  {
    // Flexible boxes.
    properties: [
      'flex',
      'flexGrow',
      'flexShrink',
      'flexBasis',
      'flexFlow',
      'flexDirection',
      'flexWrap',
      'WebkitBoxOrient',
    ],
  },
  {
    // Grid layout.
    properties: [
      'grid',
      'gridArea',
      'gridTemplate',
      'gridTemplateAreas',
      'gridTemplateRows',
      'gridTemplateColumns',
      'gridRow',
      'gridRowStart',
      'gridRowEnd',
      'gridColumn',
      'gridColumnStart',
      'gridColumnEnd',
      'gridAutoRows',
      'gridAutoColumns',
      'gridAutoFlow',
      'gridGap',
      'gridRowGap',
      'gridColumnGap',
    ],
  },
  {
    // Gap.
    properties: ['gap', 'rowGap', 'columnGap'],
  },
  {
    // Layout alignment.
    properties: [
      'placeContent',
      'placeItems',
      'placeSelf',
      'alignContent',
      'alignItems',
      'alignSelf',
      'justifyContent',
      'justifyItems',
      'justifySelf',
    ],
  },
  {
    // Order.
    properties: ['order'],
  },
  {
    // Box model.
    properties: [
      'float',
      'inlineSize',
      'minInlineSize',
      'maxInlineSize',
      'width',
      'minWidth',
      'maxWidth',
      'blockSize',
      'minBlockSize',
      'maxBlockSize',
      'height',
      'minHeight',
      'maxHeight',
      'aspectRatio',
      'padding',
      'paddingBlock',
      'paddingBlockStart',
      'paddingBlockEnd',
      'paddingInline',
      'paddingInlineStart',
      'paddingInlineEnd',
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
      'margin',
      'marginBlock',
      'marginBlockStart',
      'marginBlockEnd',
      'marginInline',
      'marginInlineStart',
      'marginInlineEnd',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft',
      'overflow',
      'overflowBlock',
      'overflowInline',
      'overflowX',
      'overflowY',
      'WebkitOverflowScrolling',
      'msOverflowX',
      'msOverflowY',
      'msOverflowStyle',
      'overscrollBehavior',
      'overscrollBehaviorInline',
      'overscrollBehaviorBlock',
      'overscrollBehaviorX',
      'overscrollBehaviorY',
      'clip',
      'clipPath',
      'clear',
    ],
  },
  {
    // Typography.
    properties: [
      'font',
      'fontFamily',
      'fontSize',
      'fontVariationSettings',
      'fontStyle',
      'fontWeight',
      'fontFeatureSettings',
      'fontOpticalSizing',
      'fontKerning',
      'fontVariant',
      'fontVariantLigatures',
      'fontVariantCaps',
      'fontVariantAlternates',
      'fontVariantNumeric',
      'fontVariantEastAsian',
      'fontVariantPosition',
      'fontSizeAdjust',
      'fontStretch',
      'fontEffect',
      'fontEmphasize',
      'fontEmphasizePosition',
      'fontEmphasizeStyle',
      'WebkitFontSmoothing',
      'MozOsxFontSmoothing',
      'fontSmooth',
      'hyphens',
      'lineHeight',
      'color',
      'WebkitTextFillColor',
      'WebkitTextStroke',
      'WebkitTextStrokeWidth',
      'WebkitTextStrokeColor',
      'textAlign',
      'textAlignLast',
      'textEmphasis',
      'textEmphasisColor',
      'textEmphasisStyle',
      'textEmphasisPosition',
      'textDecoration',
      'textDecorationLine',
      'textDecorationThickness',
      'textDecorationStyle',
      'textDecorationColor',
      'textUnderlinePosition',
      'textUnderlineOffset',
      'textIndent',
      'textJustify',
      'textOutline',
      'textOverflow',
      'textOverflowEllipsis',
      'textOverflowMode',
      'WebkitLineClamp',
      'lineClamp',
      'textShadow',
      'textTransform',
      'textWrap',
      'WebkitTextSizeAdjust',
      'msTextSizeAdjust',
      'letterSpacing',
      'wordBreak',
      'wordSpacing',
      'wordWrap',
      'overflowWrap',
      'tabSize',
      'whiteSpace',
      'verticalAlign',

      'listStyle',
      'listStylePosition',
      'listStyleType',
      'listStyleImage',

      'src',
      'fontDisplay',
      'unicodeRange',
      'sizeAdjust',
      'ascentOverride',
      'descentOverride',
      'lineGapOverride',
    ],
  },
  {
    // Accessibility & Interactions.
    properties: [
      'appearance',
      'accentColor',
      'colorScheme',
      'pointerEvents',
      'msTouchAction',
      'touchAction',
      'cursor',
      'caretColor',
      'visibility',
      'zoom',
      'tableLayout',
      'emptyCells',
      'captionSide',
      'borderSpacing',
      'borderCollapse',
      'content',
      'quotes',
      'counterReset',
      'counterSet',
      'counterIncrement',
      'resize',
      'scrollBehavior',
      'scrollSnapType',
      'scrollSnapAlign',
      'scrollSnapStop',
      'scrollPadding',
      'scrollPaddingInline',
      'scrollPaddingInlineStart',
      'scrollPaddingInlineEnd',
      'scrollPaddingBlock',
      'scrollPaddingBlockStart',
      'scrollPaddingBlockEnd',
      'scrollPaddingTop',
      'scrollPaddingRight',
      'scrollPaddingBottom',
      'scrollPaddingLeft',
      'scrollMargin',
      'scrollMarginInline',
      'scrollMarginInlineStart',
      'scrollMarginInlineEnd',
      'scrollMarginBlock',
      'scrollMarginBlockStart',
      'scrollMarginBlockEnd',
      'scrollMarginTop',
      'scrollMarginRight',
      'scrollMarginBottom',
      'scrollMarginLeft',
      'scrollbarColor',
      'scrollbarGutter',
      'scrollbarWidth',
      'userSelect',
      'WebkitUserSelect',
      'navIndex',
      'navUp',
      'navRight',
      'navDown',
      'navLeft',
    ],
  },
  {
    // Images, backgrounds, & borders.
    properties: [
      'objectFit',
      'objectPosition',
      'msInterpolationMode',
      'imageOrientation',
      'imageRendering',
      'imageResolution',
      'background',
      'backgroundColor',
      'backgroundImage',
      'filter',
      'backgroundRepeat',
      'backgroundAttachment',
      'backgroundPosition',
      'backgroundPositionX',
      'backgroundPositionY',
      'backgroundClip',
      'backgroundOrigin',
      'backgroundSize',
      'backgroundBlendMode',
      'isolation',
      'backdropFilter',
      'border',
      'borderColor',
      'borderStyle',
      'borderWidth',
      'borderBlock',
      'borderBlockStart',
      'borderBlockStartColor',
      'borderBlockStartStyle',
      'borderBlockStartWidth',
      'borderBlockEnd',
      'borderBlockEndColor',
      'borderBlockEndStyle',
      'borderBlockEndWidth',
      'borderInline',
      'borderInlineStart',
      'borderInlineStartColor',
      'borderInlineStartStyle',
      'borderInlineStartWidth',
      'borderInlineEnd',
      'borderInlineEndColor',
      'borderInlineEndStyle',
      'borderInlineEndWidth',
      'borderTop',
      'borderTopColor',
      'borderTopStyle',
      'borderTopWidth',
      'borderRight',
      'borderRightColor',
      'borderRightStyle',
      'borderRightWidth',
      'borderBottom',
      'borderBottomColor',
      'borderBottomStyle',
      'borderBottomWidth',
      'borderLeft',
      'borderLeftColor',
      'borderLeftStyle',
      'borderLeftWidth',
      'borderRadius',
      'borderStartStartRadius',
      'borderStartEndRadius',
      'borderEndStartRadius',
      'borderEndEndRadius',
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomRightRadius',
      'borderBottomLeftRadius',
      'borderImage',
      'borderImageSource',
      'borderImageSlice',
      'borderImageWidth',
      'borderImageOutset',
      'borderImageRepeat',
      'outline',
      'outlineWidth',
      'outlineStyle',
      'outlineColor',
      'outlineOffset',
      'boxShadow',
      'mixBlendMode',
      'opacity',
    ],
  },
  {
    // Masking.
    properties: [
      'maskBorder',
      'maskBorderSource',
      'maskBorderSlice',
      'maskBorderWidth',
      'maskBorderOutset',
      'maskBorderRepeat',
      'maskBorderMode',
      'mask',
      'maskImage',
      'maskMode',
      'maskRepeat',
      'maskPosition',
      'maskClip',
      'maskOrigin',
      'maskSize',
      'maskComposite',
    ],
  },
  {
    // SVG Presentation Attributes.
    properties: [
      'alignmentBaseline',
      'baselineShift',
      'dominantBaseline',
      'textAnchor',
      'wordSpacing',
      'writingMode',

      'fill',
      'fillOpacity',
      'fillRule',
      'stroke',
      'strokeDasharray',
      'strokeDashoffset',
      'strokeLinecap',
      'strokeLinejoin',
      'strokeMiterlimit',
      'strokeOpacity',
      'strokeWidth',

      'colorInterpolation',
      'colorInterpolationFilters',
      'colorProfile',
      'colorRendering',
      'floodColor',
      'floodOpacity',
      'lightingColor',
      'markerStart',
      'markerMid',
      'markerEnd',
      'shapeRendering',
      'stopColor',
      'stopOpacity',
    ],
  },
  {
    // Transitions & Animation.
    properties: [
      'transition',
      'transitionDelay',
      'transitionTimingFunction',
      'transitionDuration',
      'transitionProperty',
      'transform',
      'transformOrigin',
      'rotate',
      'scale',
      'translate',
      'perspective',
      'perspectiveOrigin',
      'animation',
      'animationName',
      'animationDuration',
      'animationPlayState',
      'animationTimingFunction',
      'animationDelay',
      'animationIterationCount',
      'animationDirection',
      'willChange',
    ],
  },
  {
    // Paged media
    properties: ['breakBefore', 'breakInside', 'breakAfter', 'orphans', 'widows'],
  },
];

module.exports = propertyGroups;
