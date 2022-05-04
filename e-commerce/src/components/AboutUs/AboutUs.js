import React from 'react';
import PropTypes from 'prop-types';
import './AboutUs.scss';
import { Card } from '@mui/material';

const AboutUs = () => (
  <div className="AboutUs" data-testid="AboutUs">
    <Card align="center">
      <h4>On Shiyuan Ye’s attractive About page, the Chinese-born graphic designer’s talents are pronounced. Her portrait is professional and adds a personal touch. What really grabs our attention to her graphic design website is that it’s embellished with a groovy animated graphic and a color palette that is bright, but not overpowering.  </h4>
    </Card>
  </div>
);

AboutUs.propTypes = {};

AboutUs.defaultProps = {};

export default AboutUs;
