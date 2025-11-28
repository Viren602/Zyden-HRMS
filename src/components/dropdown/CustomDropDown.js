import { default as ReactSelect, components } from "react-select";

const customStyles = {
    control: (base, state) => ({
        ...base,
        borderRadius: "8px",
        border: "1px solid #d2d2d2",
        backgroundColor: state.isDisabled ? "#f1f1f1" : "#ffffff",
        cursor: state.isDisabled ? "not-allowed" : "default",
        boxShadow: "none",
        width: "100%",
        minHeight: "38px",
        "&:hover": { border: "1px solid #d2d2d2" },
        ...(state.isFocused && {
            border: "1px solid #2563eb1a",
        }),
    }),
    valueContainer: (base) => ({
        ...base,
        padding: "6px 12px",
        height: "38px",
        overflowY: "auto",
    }),
    singleValue: (base) => ({
        ...base,
        color: "#000",
        display: "flex",
        alignItems: "center",
    }),
    placeholder: (base) => ({
        ...base,
        color: "#999",
    }),
    input: (base) => ({
        ...base,
        margin: 0,
        padding: 0,
    }),
    menu: (base) => ({
        ...base,
        borderRadius: "8px",
        marginTop: "4px",
        zIndex: 10,
    }),
    option: (styles, { isFocused, isSelected, isDisabled }) => ({
        ...styles,
        height: "37.8px",
        minHeight: "37.8px",
        padding: "0 12px",
        display: "flex",
        alignItems: "center",
        cursor: isDisabled ? "not-allowed" : "pointer",
        backgroundColor: isSelected
            ? "#fff"
            : isFocused
                ? "rgba(112, 79, 56, 0.08)"
                : "#ffffff",
        color: "#000",
        overflow: "hidden",
        transition: "background-color 0.15s ease, color 0.15s ease",
        outline: "none",
        boxShadow: "none",
        "&:active": {
            backgroundColor: "rgba(112, 79, 56, 0.12)",
        },
    }),
    menuList: (base) => ({
        ...base,
        borderRadius: "8px",
        padding: 0,
    }),
    multiValue: (base, { data, selectProps }) => ({
        ...base,
        borderRadius: 9999,
        border: "1px solid #e2e2e2",
        background: selectProps.isColor && data.hex ? `${data.hex}1A` : "#efefef",
        alignItems: "center",
        margin: "2px",
        overflow: "hidden",
    }),
    multiValueLabel: (base) => ({
        ...base,
        padding: "4px 6px",
        fontSize: 13,
        lineHeight: 1,
        maxWidth: 160,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    }),
    multiValueRemove: (base) => ({
        ...base,
        borderRadius: 0,
        padding: "3px",
    }),
};

const Checkbox = ({ checked, indeterminate }) => (
    <span
        aria-hidden="true"
        style={{
            width: 18,
            height: 18,
            flex: "0 0 18px",
            borderRadius: 6,
            border: checked || indeterminate ? "1px solid #704f38" : "1px solid #cfcfcf",
            background: checked ? "#704f38" : "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
            transition: "all 0.2s ease",
            position: "relative",
        }}
    >
        <svg
            viewBox="0 0 12 10"
            width="10"
            height="10"
            style={{ opacity: checked ? 1 : 0, transition: "opacity 0.2s ease" }}
        >
            <path
                d="M1 5l3 3 7-7"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
        <span
            style={{
                position: "absolute",
                width: 10,
                height: 2,
                borderRadius: 2,
                background: "#704f38",
                opacity: indeterminate ? 1 : 0,
                transition: "opacity 0.2s ease",
            }}
        />
    </span>
);

const CustomOption = (props) => {
    const { data, selectProps, isSelected } = props;
    const showColor = selectProps.isColor && data.hex;
    const showCheckbox = !!selectProps.isMulti;
    const allValue = selectProps.allOption?.value ?? "__ALL__";
    const isAllToken = data.value === allValue;
    const currentValues = Array.isArray(selectProps.value) ? selectProps.value : [];
    const enabledRealOptions = (selectProps.realOptions || []).filter((o) => !o.isDisabled);
    const selectedEnabledCount = currentValues.filter((o) => !o?.isDisabled).length;
    const totalEnabledCount = enabledRealOptions.length;
    const allChecked = totalEnabledCount > 0 && selectedEnabledCount === totalEnabledCount;
    const someChecked =
        selectedEnabledCount > 0 && selectedEnabledCount < totalEnabledCount;

    return (
        <components.Option {...props}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    width: "100%",
                    minHeight: "37.8px",
                    height: "37.8px",
                }}
            >
                {showCheckbox && (
                    <Checkbox
                        checked={isAllToken ? allChecked : isSelected}
                        indeterminate={isAllToken ? !allChecked && someChecked : false}
                    />
                )}
                {showColor && (
                    <span
                        style={{
                            width: 16,
                            height: 16,
                            borderRadius: "50%",
                            backgroundColor: data.hex,
                            border: "1px solid #ddd",
                            flex: "0 0 16px",
                        }}
                    />
                )}
                <span
                    style={{
                        display: "block",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                    title={data.label}
                >
                    {data.label}
                </span>
            </div>
        </components.Option>
    );
};

const CustomSingleValue = (props) => {
    const { data, selectProps } = props;
    const showColor = selectProps.isColor && data.hex;

    return (
        <components.SingleValue {...props}>
            <div style={{ display: "flex", alignItems: "center" }}>
                {showColor && (
                    <span
                        style={{
                            display: "inline-block",
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            backgroundColor: data.hex,
                            marginRight: "8px",
                            border: "1px solid #ddd",
                        }}
                    />
                )}
                <span>{data.label}</span>
            </div>
        </components.SingleValue>
    );
};

const CustomMultiValueLabel = (props) => {
    const { data, selectProps } = props;
    const showColor = selectProps.isColor && data.hex;

    return (
        <components.MultiValueLabel {...props}>
            <div style={{ display: "flex", alignItems: "center" }}>
                {showColor && (
                    <span
                        style={{
                            display: "inline-block",
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: data.hex,
                            marginRight: "6px",
                            border: "1px solid #ddd",
                        }}
                    />
                )}
                <span style={{ fontSize: "12px", lineHeight: "12px", fontWeight: "500" }}>
                    {data.label}
                </span>
            </div>
        </components.MultiValueLabel>
    );
};

const Selector = ({
    options = [],
    value,
    isMulti = false,
    isColor,
    onChange,
    drpIdentity,
    allowSelectAll = true,
    allOption = { label: "Select All", value: "__ALL__" },
    placeholder = "Select",
    ...rest
}) => {
    const placeholderOpt = !isMulti ? [{ label: "Select", value: 0, isDisabled: true }] : [];

    const allOpt = isMulti && allowSelectAll ? [allOption] : [];

    const realOptions = options;
    const optionsList = [...placeholderOpt, ...allOpt, ...realOptions];

    const enabledRealOptions = realOptions.filter((o) => !o.isDisabled);

    const handleChange = (selected) => {
        if (!isMulti) {
            onChange?.(selected, drpIdentity);
            return;
        }

        const selectedArr = Array.isArray(selected) ? selected : [];
        const currentArr = Array.isArray(value) ? value : [];

        if (selectedArr.length === 0) {
            onChange?.([], drpIdentity);
            return;
        }

        const last = selectedArr[selectedArr.length - 1];

        if (allowSelectAll && last && last.value === allOption.value) {
            const currentlyAll =
                currentArr.filter((o) => !o?.isDisabled).length === enabledRealOptions.length &&
                enabledRealOptions.length > 0;

            if (currentlyAll) {
                onChange?.([], drpIdentity);
            } else {
                onChange?.(enabledRealOptions, drpIdentity);
            }
            return;
        }

        const cleaned = selectedArr.filter(
            (o) => o.value !== 0 && (!allowSelectAll || o.value !== allOption.value)
        );
        onChange?.(cleaned, drpIdentity);
    };

    return (
        <span
            className="d-inline-block custom-input"
            data-toggle="popover"
            data-trigger="focus"
            data-content="Please select account(s)"
        >
            <ReactSelect
                className="custom-checkbox-select"
                styles={customStyles}
                components={{
                    Option: CustomOption,
                    SingleValue: CustomSingleValue,
                    MultiValueLabel: CustomMultiValueLabel,
                }}
                isMulti={isMulti}
                isColor={isColor}
                hideSelectedOptions={false}
                closeMenuOnSelect={!isMulti}
                options={optionsList}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                realOptions={realOptions}
                allOption={allOption}
                {...rest}
            />
        </span>
    );
};

export default Selector;
