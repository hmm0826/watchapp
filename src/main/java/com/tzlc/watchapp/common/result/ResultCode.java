package com.tzlc.watchapp.common.result;

public enum ResultCode {
    // 公共请求信息

    SUCCESS(200, "请求成功"),
    FAIL(500, "请求失败，请联系管理员"),
    REQUEST_METHOD_NOT_SUPPORT(400,"请求参数与接口接收的参数不匹配方式"),

    // 用户错误信息： 50000100-50000199
    //USER_NOT_FOUND(50000100, "用户不存在！"),
    USER_WX_LOGIN_UNAUTHORIZED(50000101, "微信登录权限失败"),
    USER_LOGIN_UNAUTHORIZED(50000101, "登录权限失败"),

    NOT_PERMISSION_SEE(50000102,"没有权限查看该信息"),
    NOT_PERMISSION_ACTION(50000103,"没有操作权限"),
    ORDER_NOT_PERMISSION_SEE(400,"无角色"),
    ORDER_NOT_FOUND(404,"没有找到"),

    // 订单错误信息：50000200-50000299
    ORDER_EXCEPTION(50000200, "订单模块异常"),
    //ORDER_NOT_FOUND(50000201, "找不到该订单"),
    //ORDER_NOT_PERMISSION_SEE(50000202,"没有权限查看该订单"),
    ORDER_NOT_PERMISSION_ACTION(50000203,"没有权限查看该订单"),
    ORDER_CANCEL_ERROR(50000204,"订单取消失败"),
    ORDER_EVALUATION_ERROR(50000205,"订单评价失败"),
    MASTER_APPOINTMENT_ERROR(50000206,"预约失败"),

    SOCKET_MSG_TYPE_USER(50000206,"无效信息 ")
            ;




    private Integer code;

    private String msg;

    ResultCode(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public Integer getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }

    public static String getMsg(String name) {
        for (ResultCode item : ResultCode.values()) {
            if (item.name().equals(name)) {
                return item.msg;
            }
        }
        return null;
    }

    public static Integer getCode(String name) {
        for (ResultCode item : ResultCode.values()) {
            if (item.name().equals(name)) {
                return item.code;
            }
        }
        return null;
    }

    @Override
    public String toString() {
        return "ResultCode{" +
                "code=" + code +
                ", msg='" + msg + '\'' +
                '}';
    }
}
