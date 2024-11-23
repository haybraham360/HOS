import "../css/alert.css";
import { AlertStruct } from "../core/struct";
import { AlertType } from "../core/enums";

function Alert({ show, type, title, message, transform } : AlertStruct) {
    return (
        <div className={show == true ? `alert ${type == AlertType.SUCCESS ? 'alert-success' : type == AlertType.WARNING ? 'alert-warning' : type == AlertType.ERROR ? 'alert-error' : "alert-info"} show`  : "alert"} style={{
            left: transform?.x &&  transform?.x < 100 ? transform?.x + "%" : "unset",
            right: transform?.x &&  transform?.x >= 100 ? 0 : "unset",
            top: transform?.y &&  transform?.y < 100 ? transform?.y + "%" : "unset",
            bottom: transform?.y &&  transform?.y >= 100 ? 0 : "unset",
            width: transform?.width == 'fit-content' ? 'fit-content' : '100%',
            padding: transform?.width == 'fit-content' ? '14px 20px' : '14px 0',
        }}>
            <span>{title}</span>
            <span>{message}</span>
        </div>
    );
}

export default Alert;