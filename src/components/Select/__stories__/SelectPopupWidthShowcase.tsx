import React from 'react';

import {Text} from '../../Text/Text';
import {Flex} from '../../layout/Flex/Flex';
import {Select} from '../Select';

const shortVirtualized = Array.from({length: 100}, (_, i) => `V${i}`).map((value) => ({
    value,
    content: value,
}));
const extralongVirtualized = Array.from({length: 100}, (_, i) =>
    Array.from({length: 50}, () => 'Value').join(String(i)),
).map((value) => ({
    value,
    content: value,
}));

const short = shortVirtualized.slice(0, 4);
const extralong = extralongVirtualized.slice(0, 4);

export const SelectPopupWidthShowcase = (args: any) => {
    return (
        <React.Fragment>
            <h2>Static width (props.popupWidth)</h2>
            <Select {...args} className="select-width-50" options={extralong} popupWidth={200} />
            <Select {...args} options={extralong} width={'max'} popupWidth={200} />

            <h2>Short values. Adjust to Control width</h2>
            <Select {...args} className="select-width-300" options={short} />
            <Select {...args} options={short} width={'max'} />

            <h2>Modes outfit/fit</h2>
            <Flex gap={10}>
                <div>
                    Extra long values. OUTFIT !default (apply max-width: 90vw)
                    <div>
                        <Select {...args} className="select-width-300" options={extralong} />
                    </div>
                </div>
                <div>
                    Short values. OUTFIT !default
                    <div>
                        <Select {...args} className="select-width-50" options={short} />
                    </div>
                </div>
            </Flex>
            <div>
                Extra long values. OUTFIT !default Fullscreen
                <div>
                    <Select {...args} width={'max'} options={extralong} />
                </div>
            </div>

            <Flex gap={10}>
                <div>
                    Extra long values. FIT
                    <div>
                        <Select
                            {...args}
                            className="select-width-300"
                            options={extralong}
                            popupWidth={'fit'}
                        />
                    </div>
                </div>

                <div>
                    Short values. FIT
                    <div>
                        <Select
                            {...args}
                            className="select-width-50"
                            options={short}
                            popupWidth={'fit'}
                        />
                    </div>
                </div>
            </Flex>
            <div>
                Extra long values. FIT. Fullscreen
                <div>
                    <Select {...args} width={'max'} options={extralong} popupWidth={'fit'} />
                </div>
            </div>

            <h2>Virtualized</h2>

            <Flex gap={10}>
                <div>
                    Extra long values. OUTFIT !default.
                    <Text color="danger-heavy"> Not works for virtualized.</Text>
                    <div>
                        <Select
                            {...args}
                            className="select-width-300"
                            options={extralongVirtualized}
                        />
                    </div>
                </div>
                <div>
                    Short values. OUTFIT !default. Virtualized (use default width: 100px)
                    <div>
                        <Select {...args} className="select-width-50" options={shortVirtualized} />
                    </div>
                </div>
            </Flex>

            <Flex gap={10}>
                <div>
                    Extra long values. FIT. Virtualized
                    <div>
                        <Select
                            {...args}
                            className="select-width-300"
                            options={extralongVirtualized}
                            popupWidth={'fit'}
                        />
                    </div>
                </div>

                <div>
                    Short values. FIT. Virtualized
                    <div>
                        <Select
                            {...args}
                            className="select-width-50"
                            options={shortVirtualized}
                            popupWidth={'fit'}
                        />
                    </div>
                </div>
            </Flex>

            <h2>Multi</h2>

            <div>
                <div>Keep popup width while picking</div>
                <Select multiple {...args} options={short} />
            </div>
        </React.Fragment>
    );
};
