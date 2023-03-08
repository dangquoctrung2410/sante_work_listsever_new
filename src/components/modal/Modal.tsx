import { Modal } from 'antd';
import { useRef, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
// tslint:disable-next-line: no-duplicate-imports
import Draggable from 'react-draggable';

type Props = {};
const DraggableModal = (_props: Props) => {
  const [disabled, setDisabled] = useState(false);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef<HTMLDivElement>(null);
  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  return (
    <Modal
      title={
        <div
          style={{
            width: '100%',
            cursor: 'move',
          }}
          onMouseOver={() => {
            if (disabled) {
              setDisabled(false);
            }
          }}
          onMouseOut={() => {
            setDisabled(true);
          }}
        >
          Draggable Modal
        </div>
      }
      open={true}
      modalRender={(modal) => (
        <Draggable
          disabled={disabled}
          bounds={bounds}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          <div ref={draggleRef}>{modal}</div>
        </Draggable>
      )}
    >
      <p>
        Just don&apos;t learn physics at school and your life will be full of
        magic and miracles.
      </p>
      <br />
      <p>
        Day before yesterday I saw a rabbit, and yesterday a deer, and today,
        you.
      </p>
    </Modal>
  );
};

export default DraggableModal;
