export default function ArrayBufferToJson(array_buf){
    const decoder = new TextDecoder('utf8');
    const json = decoder.decode(array_buf);
    const message = JSON.parse(json);
    return message;
}