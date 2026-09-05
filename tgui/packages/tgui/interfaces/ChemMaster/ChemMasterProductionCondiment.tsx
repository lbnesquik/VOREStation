import { useBackend } from 'tgui/backend';
import { modalOpen } from 'tgui/interfaces/common/ComplexModal';
import { Button, LabeledList } from 'tgui-core/components';

export const ChemMasterProductionCondiment = (props) => {
  const { act } = useBackend();
  return (
    <>
      <Button
        icon="box"
        mb="0.5rem"
        onClick={() => modalOpen('create_condi_pack')}
      >
        Create condiment pack (10u max)
      </Button>
      <br />
      <Button
        icon="wine-bottle"
        mb="0"
        onClick={() => act('create_condi_bottle')}
      >
        Create bottle (60u max)
      </Button>


      <LabeledList>
        <LabeledList.Item label="Bottle">
            <Button
              icon="wine-bottle"
              mr="0.5rem"
              mb="0.5rem"
              onClick={() => modalOpen('create_bottle')}
            >
              Create bottle (60u max)
            </Button>
            <Button
              icon="plus-square"
              onClick={() => modalOpen('create_bottle_two')}
            >
              Two
            </Button>
            <Button
              icon="plus-square"
              onClick={() => modalOpen('create_bottle_multiple')}
            >
              Multiple
            </Button>
            <br />
        </LabeledList.Item>
      </LabeledList>



    </>
  );
};
