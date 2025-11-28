import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import Selector from "../../components/dropdown/CustomDropDown";

function InvoiceDetails() {
  const [formData, setFormData] = useState({
    invoiceNo: "",
    date: "",
    clientName: "",
    projectName: "",
    subTotal: null,
    grandTotal: null,
    address1: "",
    address2: "",
    gst: "",
    hsnCode: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
    total: null,
    cgst: null,
    sgst: null,
  });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;

    // Auto GST calculation when SubTotal changes
    if (name === "subTotal") {
      const sub = Number(value);
      const sgst = sub * 0.09;
      const cgst = sub * 0.09;
      const grand = sub + sgst + cgst;

      setFormData((prev) => ({
        ...prev,
        subTotal: sub,
        sgst: sgst,
        cgst: cgst,
        grandTotal: grand,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

  const [hsnList, setHsnList] = useState([
    { label: "FI1004", value: 1 },
    { label: "FI5412", value: 2 },
    { label: "HM6589", value: 3 },
  ]);

  return (
    <div className="invoice-details-page p-[15px]">
      <div className="grid grid-cols-2 gap-[10px] items-start">
        <div className="flex flex-col my-[20px] shadow-[0_2px_8px_rgba(99,99,99,0.2)] p-[15px] rounded-[5px] overflow-hidden">
          <h2>Invoice Details</h2>
          <div className="grid md:grid-cols-2 gap-[20px]">
            <div className="flex flex-col">
              <div className="flex items-center gap-[1px]">
                <label className="label text-[#333333B2]">Invoice No</label>
                <span className="label text-red-500 rotate-12 leading-none">
                  *
                </span>
              </div>
              <InputText
                name="invoiceNo"
                value={formData.invoiceNo}
                onChange={handleChange}
                type="number"
                className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-[1px]">
                <label className="label text-[#333333B2]">Date</label>
                <span className="label text-red-500 rotate-12 leading-none">
                  *
                </span>
              </div>
              <InputText
                name="date"
                value={formData.date}
                onChange={handleChange}
                type="date"
                className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-[1px]">
                <label className="label text-[#333333B2]">Client Name</label>
                <span className="label text-red-500 rotate-12 leading-none">
                  *
                </span>
              </div>
              <InputText
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                type="text"
                className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-[1px]">
                <label className="label text-[#333333B2]">Project Name</label>
                <span className="label text-red-500 rotate-12 leading-none">
                  *
                </span>
              </div>
              <InputText
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                type="text"
                className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-[1px]">
                <label className="label text-[#333333B2]">Sub Total</label>
                <span className="label text-red-500 rotate-12 leading-none">
                  *
                </span>
              </div>
              <InputText
                name="subTotal"
                value={formData.subTotal}
                onChange={handleChange}
                type="number"
                className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-[1px]">
                <label className="label text-[#333333B2]">Grand Total</label>
                <span className="label text-red-500 rotate-12 leading-none">
                  *
                </span>
              </div>
              <InputText
                name="grandTotal"
                value={formData.grandTotal}
                onChange={handleChange}
                type="number"
                className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-[1px]">
                <label className="label text-[#333333B2]">Address Line 1</label>
                <span className="label text-red-500 rotate-12 leading-none">
                  *
                </span>
              </div>
              <InputText
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                type="text"
                className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-[1px]">
                <label className="label text-[#333333B2]">Address Line 2</label>
                <span className="label text-red-500 rotate-12 leading-none">
                  *
                </span>
              </div>
              <InputText
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                type="text"
                className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-[1px]">
                <label className="label text-[#333333B2]">Gst</label>
                <span className="label text-red-500 rotate-12 leading-none">
                  *
                </span>
              </div>
              <InputText
                name="gst"
                value={formData.gst}
                onChange={handleChange}
                type="text"
                className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-[1px]">
                <label className="label text-[#333333B2]">Hsn Code</label>
                <span className="label text-red-500 rotate-12 leading-none">
                  *
                </span>
              </div>
              <Selector options={hsnList} value={formData.hsnCode} />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-[1px]">
                <label className="label text-[#333333B2]">City</label>
                <span className="label text-red-500 rotate-12 leading-none">
                  *
                </span>
              </div>
              <InputText
                name="city"
                value={formData.city}
                onChange={handleChange}
                type="text"
                className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-[1px]">
                <label className="label text-[#333333B2]">State</label>
                <span className="label text-red-500 rotate-12 leading-none">
                  *
                </span>
              </div>
              <InputText
                name="state"
                value={formData.state}
                onChange={handleChange}
                type="text"
                className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-[1px]">
                <label className="label text-[#333333B2]">Country</label>
                <span className="label text-red-500 rotate-12 leading-none">
                  *
                </span>
              </div>
              <InputText
                name="country"
                value={formData.country}
                onChange={handleChange}
                type="text"
                className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-[1px]">
                <label className="label text-[#333333B2]">Total</label>
                <span className="label text-red-500 rotate-12 leading-none">
                  *
                </span>
              </div>
              <InputText
                name="total"
                value={formData.total}
                onChange={handleChange}
                type="number"
                className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
              />
            </div>
          </div>
        </div>
        <div className="my-[20px] shadow-[0_2px_8px_rgba(99,99,99,0.2)] p-[15px] rounded-[5px] overflow-hidden">
          <div class="invoice-page">
            <div class="invoice-header">
              <div class="invoice-head">
                <img src="/Zyden-logo.png" />
                <h1>Tax Invoice</h1>
              </div>
              <div class="invoice-details">
                <table>
                  <tbody>
                    <tr>
                      <td>Invoice no:</td>
                      <td>{formData.invoiceNo}</td>
                    </tr>
                    <tr>
                      <td>Invoice date:</td>
                      <td>{formData.date}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="invoice-details-table">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h2>Bill to:</h2>
                        <h3>{formData.clientName}</h3>
                        <p>
                          {formData.address1}
                          {formData.address2}
                        </p>
                        <p>{formData.city}</p>
                        <p>{formData.state}</p>
                        <p>
                          <strong>GSTIN</strong>: {formData.gst}
                        </p>
                      </td>
                      <td>
                        <h2>Bill from:</h2>
                        <h3>Zyden IT Solutions</h3>
                        <p>
                          Antilia Business Hub, Nr. Nana Chiloda Circle, Nana
                          Chiloda, Ahmedabad, Gujarat - 382330.
                        </p>
                        <p>
                          <strong>GSTIN</strong>: CL20250919
                        </p>
                      </td>
                    </tr>
                    <tr></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="invoice-mid">
              <div class="invoice-table">
                <table>
                  <thead>
                    <tr>
                      <th>Item name</th>
                      <th></th>
                      <th>HSN CODE</th>
                      <th></th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{formData.projectName}</td>
                      <td>{formData.hsnCode}</td>
                      <td></td>
                      <td></td>
                      <td>₹{formData.total}</td>
                    </tr>
                  </tbody>
                  <thead class="invoice-total">
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>Subtotal:</th>
                      <th>₹{formData.subTotal}</th>
                    </tr>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>SGST(9%)</th>
                      <th>₹{formData.sgst}</th>
                    </tr>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>CGST(9%)</th>
                      <th>₹{formData.cgst}</th>
                    </tr>
                  </thead>
                  <thead>
                    <tr class="invoice-grand-total">
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>Total:</th>
                      <th>₹{formData.grandTotal}</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>

            <div class="invoice-bottom">
              <div class="invoice-bottom-details">
                <table>
                  <h2>Bank details:</h2>
                  <tbody>
                    <tr>
                      <td>Bank name:</td>
                      <td>State Bank Of India</td>
                    </tr>
                    <tr>
                      <td>Account no.:</td>
                      <td>25897412365</td>
                    </tr>
                    <tr>
                      <td>IFSC code:</td>
                      <td>SBI000002</td>
                    </tr>
                    <tr>
                      <td>Branch:</td>
                      <td>Nana Chiloda</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="invoice-notes">
                <table class="notes-table">
                  <tbody>
                    <tr>
                      <td class="left-section">
                        <p>
                          <strong>Notes:</strong>
                        </p>
                        <p>This is a computer-generated invoice.</p>
                        <hr width="260px" />

                        <table class="qr-info">
                          <tr>
                            <td rowspan="3">
                              <img
                                src="/code.png"
                                alt="QR Code"
                                class="qr-code"
                              />
                            </td>
                            <td>
                              <strong>More info:</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fi fi-rr-phone-call"></i> +91 8128548795
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fi fi-rr-envelope"></i>{" "}
                              info@zyden-it.com
                            </td>
                          </tr>
                        </table>
                      </td>

                      <td class="right-section" valign="bottom">
                        <p>
                          <strong>For Zyden IT Solutions</strong>
                        </p>
                        <div class="signatory">
                          <span>Authorised Signatory</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetails;
