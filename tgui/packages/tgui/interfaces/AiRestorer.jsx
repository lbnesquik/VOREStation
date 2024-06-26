import { useBackend } from '../backend';
import {
  Box,
  Button,
  LabeledList,
  NoticeBox,
  ProgressBar,
  Section,
} from '../components';
import { Window } from '../layouts';

export const AiRestorer = () => {
  return (
    <Window width={370} height={360}>
      <Window.Content scrollable>
        <AiRestorerContent />
      </Window.Content>
    </Window>
  );
};

export const AiRestorerContent = (props) => {
  const { act, data } = useBackend();
  const {
    AI_present,
    error,
    name,
    laws,
    isDead,
    restoring,
    health,
    ejectable,
  } = data;
  return (
    <>
      {error && <NoticeBox textAlign="center">{error}</NoticeBox>}
      {!!ejectable && (
        <Button
          fluid
          icon="eject"
          disabled={!AI_present}
          onClick={() => act('PRG_eject')}
        >
          {AI_present ? name : '----------'}
        </Button>
      )}
      {!!AI_present && (
        <Section
          title={ejectable ? 'System Status' : name}
          buttons={
            <Box inline bold color={isDead ? 'bad' : 'good'}>
              {isDead ? 'Nonfunctional' : 'Functional'}
            </Box>
          }
        >
          <LabeledList>
            <LabeledList.Item label="Integrity">
              <ProgressBar
                value={health}
                minValue={0}
                maxValue={100}
                ranges={{
                  good: [70, Infinity],
                  average: [50, 70],
                  bad: [-Infinity, 50],
                }}
              />
            </LabeledList.Item>
          </LabeledList>
          {!!restoring && (
            <Box bold textAlign="center" fontSize="20px" color="good" mt={1}>
              RECONSTRUCTION IN PROGRESS
            </Box>
          )}
          <Button
            fluid
            icon="plus"
            disabled={restoring}
            mt={1}
            onClick={() => act('PRG_beginReconstruction')}
          >
            Begin Reconstruction
          </Button>
          <Section title="Laws" level={2}>
            {laws.map((law) => (
              <Box key={law} className="candystripe">
                {law}
              </Box>
            ))}
          </Section>
        </Section>
      )}
    </>
  );
};
