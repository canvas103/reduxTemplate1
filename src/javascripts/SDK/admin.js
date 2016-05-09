import request from 'superagent';
import {token} from './utils/userToken';

export function getCustomerList(slug) {
    return new Promise((resolve, reject) => {
        request.get('/api/management/perm-group-list/')
            .query({university_slug: slug, token})
            .end((err, res) => {
                resolve(res.body);
            });
    })
}



