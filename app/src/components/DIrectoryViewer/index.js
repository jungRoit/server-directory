import GridItem from "../GridItem";
import ListItem from "../ListItem";

const DirectoryViewer = (props) => {
  const renderGridView = () => {
    return props.directories
      .filter((dir) => {
        switch (props.fileType) {
          case 1:
            return !dir.isDirectory;
          case 2:
            return dir.isDirectory;
          default:
            return dir;
        }
      })
      .map((directory) => (
        <GridItem
          directory={directory}
          onClick={() => {
            props.handleDirectoryClick(directory);
          }}
        />
      ));
  };

  const renderListView = () => {
    return props.directories.map((directory) => (
      <ListItem
        directory={directory}
        onClick={() => {
          props.handleDirectoryClick(directory);
        }}
      />
    ));
  };

  return props.viewType === 0 ? renderGridView() : renderListView();
};

export default DirectoryViewer;
