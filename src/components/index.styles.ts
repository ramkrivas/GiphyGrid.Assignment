import { css } from '../style'

export const styles = css`
  .giphyFeedViewer-componentWrapper {
    box-sizing: border-box;
  }

  .giphyFeedViewer-componentWrapper *,
  .giphyFeedViewer-componentWrapper *:before,
  .giphyFeedViewer-componentWrapper *:after {
    box-sizing: inherit;
  }

  .listWrapper {
    overflow-y: auto;
    
  }
  .loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}
.modal-content{
  width:500px !important;
}
`
