function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { describe, PropTypes } from 'react-desc';
import { getAvailableAtBadge, genericProps } from '../../utils';
export var doc = function doc(Paragraph) {
  var DocumentedParagraph = describe(Paragraph).availableAt(getAvailableAtBadge('Paragraph')).description('A paragraph of text.').usage("import { Paragraph } from 'grommet';\n<Paragraph />");
  DocumentedParagraph.propTypes = _extends({}, genericProps, {
    color: PropTypes.string.description('A color identifier to use for the text color.'),
    size: PropTypes.oneOfType([PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'xxlarge']), PropTypes.string]).description('The size of the Paragraph text.').defaultValue('medium'),
    textAlign: PropTypes.oneOf(['start', 'center', 'end']).description('How to align the text inside the paragraph.').defaultValue('start')
  });
  return DocumentedParagraph;
};
export var themeDoc = {
  'global.colors.text': {
    description: 'The text color used inside the Paragraph.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ dark: '#f8f8f8', light: '#444444' }"
  },
  'global.edgeSize': {
    description: 'The possible sizes for margin.',
    type: 'object',
    defaultValue: "{\n        none: '0px',\n        hair: '1px',\n        xxsmall: '3px',\n        xsmall: '6px',\n        small: '12px',\n        medium: '24px',\n        large: '48px',\n        xlarge: '96px',\n        responsiveBreakpoint: 'small',\n    }"
  },
  paragraph: {
    description: "The possible sizes of the paragraph in terms of its max-width, font-size and line-height.",
    type: 'object',
    defaultValue: "{\n      small: {\n        size: '14px',\n        height: '20px',\n        maxWidth: '336px',\n       },\n      medium: {          \n        size: '18px',\n        height: '24px',\n        maxWidth: '432px',\n      },\n      large: {\n        size: '22px',\n        height: '28px',\n        maxWidth: '528px',\n      },\n      xlarge: {\n        size: '26px',\n        height: '32px',\n        maxWidth: '624px',\n      },\n      xxlarge: {\n        size: '34px',\n        height: '40px',\n        maxWidth: '816px',\n      },\n    }"
  },
  'paragraph.textAlign': {
    description: "How to align the text inside the Paragraph.",
    type: 'string',
    defaultValue: 'start'
  },
  'paragraph.extend': {
    description: 'Any additional style for the Paragraph.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
};