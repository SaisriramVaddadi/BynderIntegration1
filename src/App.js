import * as React from "react";
import * as ReactDOM from "react-dom";
import { CompactView, Modal, Login } from "@bynder/compact-view";
const assetFieldSelection = `
  name
  url
  originalUrl
  derivatives {
    thumbnail
    webImage
  }
  ... on Video {
    previewUrls
  }
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  onSuccess(assets) {
    console.log(assets);
  }
  render() {
    return (
      <>
        <button onClick={() => this.setState({ isOpen: true })}>
          Open Compact View
        </button>
        <Modal
          isOpen={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
        >
          <Login>
            <CompactView
              language="en_US"
              onSuccess={this.onSuccess}
              assetFieldSelection={assetFieldSelection}
            />
          </Login>
        </Modal>
      </>
    );
  }
}

export default App;
