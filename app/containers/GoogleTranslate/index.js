/**
 *
 * GoogleTranslate
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import GoogleHeader from 'components/GoogleHeader';
import NavButton from 'components/NavButton';
import NavTabs from 'components/NavTabs';
import ActionTextArea from 'components/ActionTextArea';
import styled from 'styled-components';
import makeSelectGoogleTranslate from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
//
import ExampleCard from './ExampleCard';
import MeaningCard from './MeaningCard';
import SymsCard from './SymsCard';
import TransCard from './TransCard';
import FooterBar from './FooterBar';
const Flex = styled.div`
  display: flex;
`;

const Grow = styled.div`
  flex-grow: 1;
`;

const TextArea = styled.textarea`
  background-color: white;
  resize: none;
  box-sizing: border-box;
  padding-bottom: 18px;
  flex-grow: 1;
  border: 1px solid #dadce0;
  border-top-style: hidden;
  border-bottom-style: hidden;
  height: 110px;
  font-size: 24px;
  line-height: 32px;
  padding: 25px 25px;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  outline-style: none;
`;

const LeftArea = styled(TextArea)`
  border-right-style: hidden;
  margin-left: 10px;
`;

const RightArea = styled(TextArea)`
  border-left-style: hidden;
  background-color: #f5f5f5;
  margin-right: 10px;
`;

const Feedback = styled.p`
  color: #80868b;
  font-family: 'Roboto';
  font-size: 11px;
  text-align: right;
  font-style: italic;
  margin-right: 10px;
`;

const Root = styled.div`
  font-family: 'Roboto';
`;
/* eslint-disable react/prefer-stateless-function */
export class GoogleTranslate extends React.Component {
  state = {
    input: '',
    vie: '',
    meaning: [
      {
        keyType: '',
        meaning: '',
        example: '',
        syms: [],
      },
    ],
    trans: [],
    example: [],
    smallsyms: [],
    syms: [],
  };

  handleChange(event) {
    this.setState(
      {
        input: event.target.value,
      },
      () => {
        // PostApi('http://localhost:8081/getData', {
        //   text: this.state.input,
        // }).then(res => {
        //   console.log(res);
        //   this.setState(res);
        // });
      },
    );
  }

  render() {
    return (
      <Root>
        <Helmet>
          <title>GoogleTranslate</title>
          <meta name="description" content="Description of GoogleTranslate" />
        </Helmet>
        <GoogleHeader />
        <NavButton />
        <NavTabs />
        <Flex>
          <LeftArea
            value={this.state.input}
            onChange={this.handleChange.bind(this)}
          />
          <RightArea value={this.state.vie} />
        </Flex>
        <ActionTextArea count={this.state.input.length} />
        {this.state.input.length !== 0 ? (
          <div>
            <div
              style={{
                marginLeft: '10px',
                marginRight: '10px',
                display: 'flex',
              }}
            >
              <MeaningCard
                input={this.state.input}
                meaning={this.state.meaning}
                css="flex-grow: 1;"
              />
              <span style={{ marginLeft: 10 }} />
              <TransCard
                input={this.state.input}
                trans={this.state.trans}
                css="flex-grow: 1;"
              />
            </div>
            <ExampleCard
              input={this.state.input}
              example={this.state.example}
            />
            <SymsCard
              input={this.state.input}
              syms={this.state.syms}
              smallsyms={this.state.smallsyms}
            />
          </div>
        ) : (
          <div />
        )}
        <a>
          <Feedback>Gửi phản hồi</Feedback>
        </a>
        <FooterBar />
      </Root>
    );
  }
}

GoogleTranslate.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  googleTranslate: makeSelectGoogleTranslate(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'googleTranslate', reducer });
const withSaga = injectSaga({ key: 'googleTranslate', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GoogleTranslate);
