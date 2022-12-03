

/* 验证手机号 */
export function checkPhone(value: string): boolean {
    const regPhone = /^1[3456789]\d{9}$/;
    return regPhone.test(value);
}