import React from 'react';

type splitPaneProps = {
  left: React.ReactNode,
  right: React.ReactNode,
}

function SplitPane(props: splitPaneProps) {
  const { left, right } = props;
  return (
    <div className="split-pane">
      <div className="split-pane-left">
        {left}
      </div>
      <div className="split-pane-right">
        {right}
      </div>
    </div>
  );
}
export default SplitPane;
