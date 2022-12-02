import {Cashtag} from '../../models/Cashtag';
import {Mention} from '../../models/Mention';
import {Hashtag} from '../../models/Hashtag';
import {Url} from '../../models/Url';
import {Tweet} from '../../models/Tweet';
import {FullTextEntities} from './FullTextEntities';


export class Tweet_Full extends Tweet {
	entities: FullTextEntities = new FullTextEntities();//fill metadata on query
}