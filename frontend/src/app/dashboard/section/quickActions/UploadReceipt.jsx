import React, { useState } from "react";

const UploadReceipt = ({ onClose, onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onUpload({ id: `r${Date.now()}`, file });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Upload Receipt</h2>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 text-gray-500 cursor-pointer hover:border-primary transition"
          >
            <input
              type="file"
              accept="image/*,application/pdf"
              className="hidden"
              id="receiptFile"
              onChange={handleFileChange}
            />
            <label htmlFor="receiptFile" className="cursor-pointer">
              {file ? (
                <p className="text-sm text-gray-700">
                  Selected: {file.name}
                </p>
              ) : (
                <p className="text-sm">Drag & drop or click to select a file</p>
              )}
            </label>
          </div>

          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition disabled:opacity-50"
              disabled={!file}
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadReceipt;
