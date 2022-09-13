import React from 'react';

type warningBannerProps = {
  warn: boolean
}
type pageProps = {
  showWarning: boolean
}
function WarningBanner(props: warningBannerProps) {
  const { warn } = props;
  if (!warn) {
    return null;
  }
  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component<{}, pageProps> {
  constructor(props: pageProps) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((prevState) => ({
      showWarning: !prevState.showWarning,
    }));
  }

  render(): React.ReactNode {
    const { showWarning } = this.state;
    return (
      <div>
        <WarningBanner warn={showWarning} />
        <button type="button" onClick={this.handleToggleClick}>
          {showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}
export default Page;
