import React, { useState, useEffect } from 'react';

const Resources = () => {
  const [folders, setFolders] = useState([]);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [currentFolderId, setCurrentFolderId] = useState(null);

  const fetchFolders = async (endpoint, payload) => {
    try {
      const response = await fetch(`/api/google-drive${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error Fetching Folders', error);
    }
  };

  const handleFolderClick = async (folderId) => {
    setCurrentFolderId(folderId);
    const response = await fetchFolders('/getAllFoldersFromFolderId', {
      folderId,
    });
    setFolders(response.folders);
  };

  const handleFileClick = async (fileId) => {
    const response = await fetchFolders('/getPDFFromFIleId', {
      fileId,
    });
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setPdfUrl(url);
  };

  const goBack = async () => {
    if (currentFolderId) {
      const response = await fetchFolders('/getAllFoldersFromFolderId', {
        folderId: currentFolderId,
      });
      setFolders(response.folders);
    }
  };

  useEffect(() => {
    fetchFolders('/getAllECEFolders', {}).then((response) => {
      setFolders(response.folders);
    });
  }, []);

  return (
    <div>
      <button onClick={goBack}>Back</button>
      <div>
        {folders.map((item) => (
          <div key={item.id}>
            {item.mimeType === 'application/vnd.google-apps.folder' ? (
              <button onClick={() => handleFolderClick(item.id)}>
                <img src="folder-icon.png" alt="Folder Icon" />
                <span>{item.name}</span>
              </button>
            ) : (
              <button onClick={() => handleFileClick(item.id)}>
                <span>{item.name}</span>
              </button>
            )}
          </div>
        ))}
      </div>
      {pdfUrl && (
        <div>
          <iframe title="PDF Viewer" width="100%" height="500px" src={pdfUrl} frameBorder="0" />
        </div>
      )}
    </div>
  );
};
export default Resources;
