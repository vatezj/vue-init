import $http from '@/assets/js/http'

export function testpost(data) {
    return $http.post('api/home/guessLike',data);
}

export function testget(data) {
    return $http.get('api/home/guessLike',data);
}