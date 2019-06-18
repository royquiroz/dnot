import React, { Component } from "react";
import { Upload, Icon, message } from "antd";
import FileDownload from "js-file-download";
import "./upload.css";

const Dragger = Upload.Dragger;

const props = {
  name: "file",
  multiple: true,
  action: "https://mideclaranot.com/api/public/index.php/excel/txt",
  onChange(info) {
    const status = info.file.status;
    if (status !== "uploading") {
      //console.log(info.file, info.fileList);
    }
    if (status === "done") {
      //console.log(info.file);
      message.success(`${info.file.name} archivo subido exitosamente`);
      FileDownload(info.file.response, "racoo_isrxe.txt");
    } else if (status === "error") {
      //console.log(info.file);
      message.error(`${info.file.name} ocurrio un error al subir el archivo`);
    }
  }
};

class FileUpload extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-2 text-center">
            <a
              className="btn btn-link"
              href="https://mideclaranot.com/archivos/EnajenacionV2.xlsx"
            >
              <img
                src="https://img.icons8.com/color/48/000000/ms-excel.png"
                alt="icon_excel"
              />
              <br />
              Enajenación
            </a>
          </div>
          <div className="col-md-2 text-center">
            <a
              className="btn btn-link"
              href="https://mideclaranot.com/archivos/EnajenacionV2_ejemplo.xlsx"
            >
              <img
                src="https://img.icons8.com/color/48/000000/ms-excel.png"
                alt="icon_excel"
              />
              <br />
              Enajenación Ejemplo
            </a>
          </div>
          <div className="col-md-2 text-center">
            <a
              className="btn btn-link"
              href="https://ptscdecnot.clouda.sat.gob.mx/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="img-sat"
                src="https://pngimage.net/wp-content/uploads/2018/06/sat-png-8.png"
                alt="icon_sat"
              />
              <br />
              Link al SAT
            </a>
          </div>
        </div>

        <div className="row">
          <div className="offset-md-3 col-md-6 text-center">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">
                Haga clic o arrastre el archivo a esta área para subir
              </p>
              <p className="ant-upload-hint">
                Solo subir archivos de Excel (xlsx)
              </p>
            </Dragger>
          </div>
        </div>
      </div>
    );
  }
}

export default FileUpload;
