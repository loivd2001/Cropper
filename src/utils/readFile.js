import { read, utils, writeFile } from "xlsx";

export const readFileXLSX = (file, callback) => {
  const reader = new FileReader();
  let result = {
    headers: [],
    json: [],
  };
  reader.onload = function (e) {
    let data = e.target.result;
    data = new Uint8Array(data);
    const workbook = read(data, {
      type: "array",
    });
    /* DO SOMETHING WITH workbook HERE */
    const first_sheet_name = workbook.SheetNames[0];
    /* Get worksheet */
    const worksheet = workbook.Sheets[first_sheet_name];
    //It will prints with header and contents ex) Name, Home...
    const jsonHeaders = utils.sheet_to_json(worksheet, {
      header: 1,
    });
    if (jsonHeaders.length > 0) {
      result["headers"] = jsonHeaders[0];
    }
    const json = utils.sheet_to_json(worksheet);
    result["json"] = json;
    callback(result);
  };
  reader.readAsArrayBuffer(file);
  return result;
};

export async function getHeaderRowXLSX(file, callback) {
  const reader = new FileReader();
  const headers = [];
  reader.onload = function (e) {
    let data = e.target.result;
    data = new Uint8Array(data);
    const workbook = read(data, {
      type: "array",
    });
    /* DO SOMETHING WITH workbook HERE */
    const first_sheet_name = workbook.SheetNames[0];
    /* Get worksheet */
    const worksheet = workbook.Sheets[first_sheet_name];

    const range = utils.decode_range(worksheet["!ref"]);
    let C,
      R = range.s.r; /* start in the first row */
    /* walk every column in the range */
    for (C = range.s.c; C <= range.e.c; ++C) {
      const cell =
        worksheet[
          utils.encode_cell({ c: C, r: R })
        ]; /* find the cell in the first row */

      let hdr = "UNKNOWN " + C; // <-- replace with your desired default
      if (cell && cell.t) hdr = utils.format_cell(cell);

      headers.push(hdr);
    }
    callback(headers);
  };
  reader.readAsArrayBuffer(file);

  return headers;
}

export const exportXLSX = (fileName, items, sheetName = 'data') => {
  const data = utils.json_to_sheet(items);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, data, sheetName);
  writeFile(wb, `${fileName}.xlsx`);
};

export const exportAOA = (fileName, items, sheetName = 'data') => {
  const data = utils.aoa_to_sheet(items);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, data, sheetName);
  writeFile(wb, `${fileName}.xlsx`);
};
