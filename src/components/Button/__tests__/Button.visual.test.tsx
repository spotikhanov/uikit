import React from 'react';

import {test} from '~playwright/core';

import {createSmokeScenarios} from '../../../stories/tests-factory/create-smoke-scenarios';
import {Button} from '../Button';

import {
    defaultProps,
    disabledCases,
    loadingCases,
    pinsCases,
    selectedCases,
    sizeCases,
    viewsCases,
} from './cases';
import {ButtonStories, CustomIconSizeButton} from './helpersPlaywright';

test.describe('Button', {tag: '@Button'}, () => {
    test('render story: <Default>', async ({mount, expectScreenshot}) => {
        await mount(<ButtonStories.Default />);

        await expectScreenshot();
    });

    test('render story: <Selected>', async ({mount, expectScreenshot}) => {
        await mount(<ButtonStories.Selected />);

        await expectScreenshot();
    });

    test('render story: <Size>', async ({mount, expectScreenshot}) => {
        await mount(<ButtonStories.Size />);

        await expectScreenshot();
    });

    test('render story: <Icon>', async ({mount, expectScreenshot}) => {
        await mount(<ButtonStories.Icon />);

        await expectScreenshot();
    });

    test('render story: <View>', async ({mount, expectScreenshot}) => {
        await mount(<ButtonStories.View />);

        await expectScreenshot();
    });

    test('render story: <Disabled>', async ({mount, expectScreenshot}) => {
        await mount(<ButtonStories.Disabled />);

        await expectScreenshot();
    });

    test('render story: <Link>', async ({mount, expectScreenshot}) => {
        await mount(<ButtonStories.Link />);

        await expectScreenshot();
    });

    test('render story: <Loading>', async ({mount, expectScreenshot}) => {
        await mount(<ButtonStories.Loading />);

        await expectScreenshot();
    });

    test('render story: <Pin>', async ({mount, expectScreenshot}) => {
        await mount(<ButtonStories.Pin />);

        await expectScreenshot();
    });

    test('render story: <Width>', async ({mount, expectScreenshot}) => {
        await mount(<ButtonStories.Width />);

        await expectScreenshot();
    });

    test('render story: <InsideText>', async ({mount, expectScreenshot}) => {
        await mount(<ButtonStories.InsideText />);

        await expectScreenshot();
    });

    test('render custom Icon size', async ({mount, expectScreenshot}) => {
        await mount(<CustomIconSizeButton />);

        await expectScreenshot();
    });

    const smokeScenarios = createSmokeScenarios(defaultProps, {
        size: sizeCases,
        selected: selectedCases,
        disabled: disabledCases,
        loading: loadingCases,
        view: viewsCases,
        pin: pinsCases,
    });

    smokeScenarios.forEach(([title, details, props]) => {
        test(title, details, async ({mount, expectScreenshot}) => {
            await mount(<Button {...props} />);

            await expectScreenshot();
        });
    });
});
