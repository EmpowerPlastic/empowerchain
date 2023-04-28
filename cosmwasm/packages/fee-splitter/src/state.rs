use cw_storage_plus::Item;

use crate::Config;

pub const CONFIG: Item<Config> = Item::new("fee_splitter_config");