import { useBackend } from '../backend';
import {
  AnimatedNumber,
  Box,
  Button,
  LabeledList,
  NumberInput,
  Section,
} from '../components';
import { Window } from '../layouts';

export const AtmosFilter = (props) => {
  const { act, data } = useBackend();
  const filterTypes = data.filter_types || [];
  return (
    <Window width={390} height={187}>
      <Window.Content>
        <Section>
          <LabeledList>
            <LabeledList.Item label="Power">
              <Button
                icon={data.on ? 'power-off' : 'times'}
                selected={data.on}
                onClick={() => act('power')}
              >
                {data.on ? 'On' : 'Off'}
              </Button>
            </LabeledList.Item>
            <LabeledList.Item label="Transfer Rate">
              <Box inline mr={1}>
                <AnimatedNumber
                  value={data.last_flow_rate}
                  format={(val) => val + ' L/s'}
                />
              </Box>
              <NumberInput
                animated
                value={parseFloat(data.rate)}
                width="63px"
                unit="L/s"
                minValue={0}
                maxValue={200}
                onDrag={(e, value) =>
                  act('rate', {
                    rate: value,
                  })
                }
              />
              <Button
                ml={1}
                icon="plus"
                disabled={data.rate === data.max_rate}
                onClick={() =>
                  act('rate', {
                    rate: 'max',
                  })
                }
              >
                Max
              </Button>
            </LabeledList.Item>
            <LabeledList.Item label="Filter">
              {filterTypes.map((filter) => (
                <Button
                  key={filter.name}
                  selected={filter.selected}
                  onClick={() =>
                    act('filter', {
                      filterset: filter.f_type,
                    })
                  }
                >
                  {filter.name}
                </Button>
              ))}
            </LabeledList.Item>
          </LabeledList>
        </Section>
      </Window.Content>
    </Window>
  );
};
