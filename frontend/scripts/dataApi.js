/**
 * 数据交换接口
 * @param {string} url
 * @param {object} data - 要发送的数据
 */
export async function fetchData(url, data) {
    let response = await fetch(url, {
        method: "post",
        body: JSON.stringify(data),
        credentials: 'include',
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    return response.json();
}
