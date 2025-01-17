import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import RightHeader from 'components/ModularComponents/RightHeader';
import initialState from 'src/redux/initialState';
import rootReducer from 'reducers/rootReducer';
import { defaultRightHeader, secondFloatStartRightHeader, floatStartRightHeader, floatCenterRightHeader, floatEndRightHeader } from '../../Helpers/mockHeaders';

export default {
  title: 'ModularComponents/FloatingHeader/RightHeader',
  component: RightHeader,
};

const MockDocumentContainer = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      Mock Document Container
      <img src="https://placekitten.com/200/300?image=11" />
    </div>
  );
};

const MockAppWrapperWithRightHeader = ({ modularHeaders }) => {
  const state = {
    ...initialState,
    viewer: {
      ...initialState.viewer,
      modularHeaders,
    },
    featureFlags: {
      customizableUI: true,
    },
  };
  return (
    <Provider store={configureStore({
      reducer: rootReducer,
      preloadedState: state,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
    })}>
      <div className="content" style={{ overflow: 'inherit' }}>
        <MockDocumentContainer />
        <RightHeader />
      </div>
    </Provider>
  );
};

const Template = (args) => <MockAppWrapperWithRightHeader {...args} />;

export const RightHeaderWithDefaultAndFloaties = Template.bind({});
RightHeaderWithDefaultAndFloaties.args = {
  modularHeaders: [
    defaultRightHeader,
    secondFloatStartRightHeader,
    floatStartRightHeader,
    floatCenterRightHeader,
    floatEndRightHeader,
  ],
};

export const FloatRightStartHeader = Template.bind({});
FloatRightStartHeader.args = {
  modularHeaders: [
    floatStartRightHeader,
    secondFloatStartRightHeader,
  ],
};

export const FloatRightCenterHeader = Template.bind({});
FloatRightCenterHeader.args = {
  modularHeaders: [
    floatCenterRightHeader,
  ],
};

export const FloatRightEndHeader = Template.bind({});
FloatRightEndHeader.args = {
  modularHeaders: [
    floatEndRightHeader,
  ],
};
