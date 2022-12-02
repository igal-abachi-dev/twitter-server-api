import {Cashtag} from '../../models/Cashtag';
import {Mention} from '../../models/Mention';
import {Hashtag} from '../../models/Hashtag';
import {Url} from '../../models/Url';


export class FullTextEntities {
	cashtags: Cashtag[] = [];
	hashtags: Hashtag[] = [];
	mentions: Mention[] = [];
	urls: Url[] = [];
}