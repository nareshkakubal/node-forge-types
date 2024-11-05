import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * InsightsResult
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InsightsResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        description: "description";
        description_from_api_doc: "description_from_api_doc";
        id: "id";
        name: "name";
        period: "period";
        title: "title";
        values: "values";
    }>;
    static get DatePreset(): Readonly<{
        data_maximum: "data_maximum";
        last_14d: "last_14d";
        last_28d: "last_28d";
        last_30d: "last_30d";
        last_3d: "last_3d";
        last_7d: "last_7d";
        last_90d: "last_90d";
        last_month: "last_month";
        last_quarter: "last_quarter";
        last_week_mon_sun: "last_week_mon_sun";
        last_week_sun_sat: "last_week_sun_sat";
        last_year: "last_year";
        maximum: "maximum";
        this_month: "this_month";
        this_quarter: "this_quarter";
        this_week_mon_today: "this_week_mon_today";
        this_week_sun_today: "this_week_sun_today";
        this_year: "this_year";
        today: "today";
        yesterday: "yesterday";
    }>;
    static get Period(): Readonly<{
        day: "day";
        days_28: "days_28";
        lifetime: "lifetime";
        month: "month";
        total_over_range: "total_over_range";
        week: "week";
    }>;
    static get Metric(): Readonly<{
        blue_reels_play_count: "blue_reels_play_count";
        creator_monetization_qualified_views: "creator_monetization_qualified_views";
        fb_media_matching_copyright_comment_count: "fb_media_matching_copyright_comment_count";
        fb_media_matching_copyright_daily_comment_count: "fb_media_matching_copyright_daily_comment_count";
        fb_media_matching_copyright_daily_like_count: "fb_media_matching_copyright_daily_like_count";
        fb_media_matching_copyright_daily_post_impressions: "fb_media_matching_copyright_daily_post_impressions";
        fb_media_matching_copyright_daily_post_impressions_by_age_bucket_and_gender: "fb_media_matching_copyright_daily_post_impressions_by_age_bucket_and_gender";
        fb_media_matching_copyright_daily_post_impressions_by_country: "fb_media_matching_copyright_daily_post_impressions_by_country";
        fb_media_matching_copyright_daily_post_impressions_by_locale: "fb_media_matching_copyright_daily_post_impressions_by_locale";
        fb_media_matching_copyright_daily_post_impressions_by_matching_post_id: "fb_media_matching_copyright_daily_post_impressions_by_matching_post_id";
        fb_media_matching_copyright_daily_post_impressions_by_matching_post_owner_id: "fb_media_matching_copyright_daily_post_impressions_by_matching_post_owner_id";
        fb_media_matching_copyright_daily_post_reactions_anger_count: "fb_media_matching_copyright_daily_post_reactions_anger_count";
        fb_media_matching_copyright_daily_post_reactions_haha_count: "fb_media_matching_copyright_daily_post_reactions_haha_count";
        fb_media_matching_copyright_daily_post_reactions_like_count: "fb_media_matching_copyright_daily_post_reactions_like_count";
        fb_media_matching_copyright_daily_post_reactions_love_count: "fb_media_matching_copyright_daily_post_reactions_love_count";
        fb_media_matching_copyright_daily_post_reactions_sorry_count: "fb_media_matching_copyright_daily_post_reactions_sorry_count";
        fb_media_matching_copyright_daily_post_reactions_wow_count: "fb_media_matching_copyright_daily_post_reactions_wow_count";
        fb_media_matching_copyright_daily_post_share_count: "fb_media_matching_copyright_daily_post_share_count";
        fb_media_matching_copyright_like_count: "fb_media_matching_copyright_like_count";
        fb_media_matching_copyright_post_impressions: "fb_media_matching_copyright_post_impressions";
        fb_media_matching_copyright_post_impressions_by_age_bucket_and_gender: "fb_media_matching_copyright_post_impressions_by_age_bucket_and_gender";
        fb_media_matching_copyright_post_impressions_by_country: "fb_media_matching_copyright_post_impressions_by_country";
        fb_media_matching_copyright_post_impressions_by_locale: "fb_media_matching_copyright_post_impressions_by_locale";
        fb_media_matching_copyright_post_impressions_by_matching_post_id: "fb_media_matching_copyright_post_impressions_by_matching_post_id";
        fb_media_matching_copyright_post_impressions_by_matching_post_owner_id: "fb_media_matching_copyright_post_impressions_by_matching_post_owner_id";
        fb_media_matching_copyright_post_reactions_anger_count: "fb_media_matching_copyright_post_reactions_anger_count";
        fb_media_matching_copyright_post_reactions_haha_count: "fb_media_matching_copyright_post_reactions_haha_count";
        fb_media_matching_copyright_post_reactions_like_count: "fb_media_matching_copyright_post_reactions_like_count";
        fb_media_matching_copyright_post_reactions_love_count: "fb_media_matching_copyright_post_reactions_love_count";
        fb_media_matching_copyright_post_reactions_sorry_count: "fb_media_matching_copyright_post_reactions_sorry_count";
        fb_media_matching_copyright_post_reactions_wow_count: "fb_media_matching_copyright_post_reactions_wow_count";
        fb_media_matching_copyright_post_share_count: "fb_media_matching_copyright_post_share_count";
        fb_reels_replay_count: "fb_reels_replay_count";
        fb_reels_total_plays: "fb_reels_total_plays";
        has_total_video_views_by_publisher_platform_type: "has_total_video_views_by_publisher_platform_type";
        post_impressions_unique: "post_impressions_unique";
        post_video_avg_time_watched: "post_video_avg_time_watched";
        post_video_followers: "post_video_followers";
        post_video_likes_by_reaction_type: "post_video_likes_by_reaction_type";
        post_video_retention_graph: "post_video_retention_graph";
        post_video_social_actions: "post_video_social_actions";
        post_video_view_time: "post_video_view_time";
        rights_manager_matching_copyright_matching_page_or_profile_view_count: "rights_manager_matching_copyright_matching_page_or_profile_view_count";
        rights_manager_matching_copyright_matching_video_view_count: "rights_manager_matching_copyright_matching_video_view_count";
        rights_manager_matching_copyright_video_view_count: "rights_manager_matching_copyright_video_view_count";
        rights_manager_matching_copyright_video_view_count_60s: "rights_manager_matching_copyright_video_view_count_60s";
        rights_manager_matching_copyright_video_view_count_60s_by_age_bucket_and_gender: "rights_manager_matching_copyright_video_view_count_60s_by_age_bucket_and_gender";
        rights_manager_matching_copyright_video_view_count_60s_by_country_id: "rights_manager_matching_copyright_video_view_count_60s_by_country_id";
        rights_manager_matching_copyright_video_view_count_60s_by_locale: "rights_manager_matching_copyright_video_view_count_60s_by_locale";
        total_audio_only_product_listen_count: "total_audio_only_product_listen_count";
        total_video_10s_views: "total_video_10s_views";
        total_video_10s_views_auto_played: "total_video_10s_views_auto_played";
        total_video_10s_views_clicked_to_play: "total_video_10s_views_clicked_to_play";
        total_video_10s_views_organic: "total_video_10s_views_organic";
        total_video_10s_views_paid: "total_video_10s_views_paid";
        total_video_10s_views_sound_on: "total_video_10s_views_sound_on";
        total_video_10s_views_unique: "total_video_10s_views_unique";
        total_video_15s_views: "total_video_15s_views";
        total_video_30s_views: "total_video_30s_views";
        total_video_30s_views_auto_played: "total_video_30s_views_auto_played";
        total_video_30s_views_clicked_to_play: "total_video_30s_views_clicked_to_play";
        total_video_30s_views_organic: "total_video_30s_views_organic";
        total_video_30s_views_paid: "total_video_30s_views_paid";
        total_video_30s_views_unique: "total_video_30s_views_unique";
        total_video_60s_excludes_shorter_views: "total_video_60s_excludes_shorter_views";
        total_video_60s_excludes_shorter_views_by_age_bucket_and_gender: "total_video_60s_excludes_shorter_views_by_age_bucket_and_gender";
        total_video_60s_excludes_shorter_views_by_distribution_source: "total_video_60s_excludes_shorter_views_by_distribution_source";
        total_video_60s_excludes_shorter_views_by_growth_accounting_bucket: "total_video_60s_excludes_shorter_views_by_growth_accounting_bucket";
        total_video_60s_excludes_shorter_views_by_growth_accounting_bucket_and_time_since_creation_bucket: "total_video_60s_excludes_shorter_views_by_growth_accounting_bucket_and_time_since_creation_bucket";
        total_video_60s_excludes_shorter_views_by_is_60s_returning_viewer: "total_video_60s_excludes_shorter_views_by_is_60s_returning_viewer";
        total_video_60s_excludes_shorter_views_by_is_60s_returning_viewer_and_time_since_creation_bucket: "total_video_60s_excludes_shorter_views_by_is_60s_returning_viewer_and_time_since_creation_bucket";
        total_video_60s_excludes_shorter_views_live: "total_video_60s_excludes_shorter_views_live";
        total_video_60s_excludes_shorter_views_unique: "total_video_60s_excludes_shorter_views_unique";
        total_video_60s_excludes_shorter_views_unique_by_age_bucket_and_gender: "total_video_60s_excludes_shorter_views_unique_by_age_bucket_and_gender";
        total_video_60s_excludes_shorter_views_unique_by_growth_accounting_bucket: "total_video_60s_excludes_shorter_views_unique_by_growth_accounting_bucket";
        total_video_60s_excludes_shorter_views_unique_by_growth_accounting_bucket_and_time_since_creation_bucket: "total_video_60s_excludes_shorter_views_unique_by_growth_accounting_bucket_and_time_since_creation_bucket";
        total_video_60s_excludes_shorter_views_unique_by_is_60s_returning_viewer: "total_video_60s_excludes_shorter_views_unique_by_is_60s_returning_viewer";
        total_video_60s_excludes_shorter_views_unique_by_is_60s_returning_viewer_and_time_since_creation_bucket: "total_video_60s_excludes_shorter_views_unique_by_is_60s_returning_viewer_and_time_since_creation_bucket";
        total_video_ad_break_ad_cpm: "total_video_ad_break_ad_cpm";
        total_video_ad_break_ad_impressions: "total_video_ad_break_ad_impressions";
        total_video_ad_break_earnings: "total_video_ad_break_earnings";
        total_video_ad_break_earnings_with_subsidy: "total_video_ad_break_earnings_with_subsidy";
        total_video_ad_impressions_by_monetization_type: "total_video_ad_impressions_by_monetization_type";
        total_video_avg_time_watched: "total_video_avg_time_watched";
        total_video_avg_time_watched_by_distribution_source: "total_video_avg_time_watched_by_distribution_source";
        total_video_avg_time_watched_by_is_60s_returning_viewer: "total_video_avg_time_watched_by_is_60s_returning_viewer";
        total_video_avg_time_watched_by_time_since_creation_bucket: "total_video_avg_time_watched_by_time_since_creation_bucket";
        total_video_avg_time_watched_followers: "total_video_avg_time_watched_followers";
        total_video_avg_time_watched_live: "total_video_avg_time_watched_live";
        total_video_comment_sentiment: "total_video_comment_sentiment";
        total_video_comment_sentiment_by_factors: "total_video_comment_sentiment_by_factors";
        total_video_complete_views: "total_video_complete_views";
        total_video_complete_views_auto_played: "total_video_complete_views_auto_played";
        total_video_complete_views_clicked_to_play: "total_video_complete_views_clicked_to_play";
        total_video_complete_views_organic: "total_video_complete_views_organic";
        total_video_complete_views_organic_unique: "total_video_complete_views_organic_unique";
        total_video_complete_views_paid: "total_video_complete_views_paid";
        total_video_complete_views_paid_unique: "total_video_complete_views_paid_unique";
        total_video_complete_views_unique: "total_video_complete_views_unique";
        total_video_consumption_rate: "total_video_consumption_rate";
        total_video_followers_unique: "total_video_followers_unique";
        total_video_growth_score: "total_video_growth_score";
        total_video_growth_score_by_factors: "total_video_growth_score_by_factors";
        total_video_impressions: "total_video_impressions";
        total_video_impressions_fan: "total_video_impressions_fan";
        total_video_impressions_fan_paid: "total_video_impressions_fan_paid";
        total_video_impressions_fan_paid_unique: "total_video_impressions_fan_paid_unique";
        total_video_impressions_fan_unique: "total_video_impressions_fan_unique";
        total_video_impressions_organic: "total_video_impressions_organic";
        total_video_impressions_organic_unique: "total_video_impressions_organic_unique";
        total_video_impressions_paid: "total_video_impressions_paid";
        total_video_impressions_paid_unique: "total_video_impressions_paid_unique";
        total_video_impressions_unique: "total_video_impressions_unique";
        total_video_impressions_viral: "total_video_impressions_viral";
        total_video_impressions_viral_unique: "total_video_impressions_viral_unique";
        total_video_imps_count_unique_by_age_bucket: "total_video_imps_count_unique_by_age_bucket";
        total_video_imps_count_unique_by_age_bucket_and_gender: "total_video_imps_count_unique_by_age_bucket_and_gender";
        total_video_imps_count_unique_by_gender: "total_video_imps_count_unique_by_gender";
        total_video_likes_by_reaction_type: "total_video_likes_by_reaction_type";
        total_video_negative_feedback: "total_video_negative_feedback";
        total_video_net_followers: "total_video_net_followers";
        total_video_net_followers_unique: "total_video_net_followers_unique";
        total_video_net_followers_unique_by_time_since_creation_bucket: "total_video_net_followers_unique_by_time_since_creation_bucket";
        total_video_play_count: "total_video_play_count";
        total_video_play_count_by_is_60s_returning_viewer_and_time_since_creation_bucket: "total_video_play_count_by_is_60s_returning_viewer_and_time_since_creation_bucket";
        total_video_play_count_by_time_since_creation_bucket: "total_video_play_count_by_time_since_creation_bucket";
        total_video_reactions_by_type_total: "total_video_reactions_by_type_total";
        total_video_relative_retention_graph: "total_video_relative_retention_graph";
        total_video_retention_graph: "total_video_retention_graph";
        total_video_retention_graph_15s: "total_video_retention_graph_15s";
        total_video_retention_graph_15s_followers: "total_video_retention_graph_15s_followers";
        total_video_retention_graph_15s_newsfeed: "total_video_retention_graph_15s_newsfeed";
        total_video_retention_graph_15s_recommended: "total_video_retention_graph_15s_recommended";
        total_video_retention_graph_15s_shares: "total_video_retention_graph_15s_shares";
        total_video_retention_graph_15s_watch: "total_video_retention_graph_15s_watch";
        total_video_retention_graph_autoplayed: "total_video_retention_graph_autoplayed";
        total_video_retention_graph_clicked_to_play: "total_video_retention_graph_clicked_to_play";
        total_video_retention_graph_gender_female: "total_video_retention_graph_gender_female";
        total_video_retention_graph_gender_male: "total_video_retention_graph_gender_male";
        total_video_social_actions: "total_video_social_actions";
        total_video_social_actions_comment_by_distribution_type: "total_video_social_actions_comment_by_distribution_type";
        total_video_social_actions_count_unique: "total_video_social_actions_count_unique";
        total_video_social_actions_count_unique_by_age_bucket: "total_video_social_actions_count_unique_by_age_bucket";
        total_video_social_actions_count_unique_by_age_bucket_and_gender: "total_video_social_actions_count_unique_by_age_bucket_and_gender";
        total_video_social_actions_count_unique_by_gender: "total_video_social_actions_count_unique_by_gender";
        total_video_social_actions_reaction_by_distribution_type: "total_video_social_actions_reaction_by_distribution_type";
        total_video_stories_by_action_type: "total_video_stories_by_action_type";
        total_video_unfollowers: "total_video_unfollowers";
        total_video_unfollowers_unique: "total_video_unfollowers_unique";
        total_video_view_count_unique_by_age_bucket: "total_video_view_count_unique_by_age_bucket";
        total_video_view_count_unique_by_age_bucket_and_gender: "total_video_view_count_unique_by_age_bucket_and_gender";
        total_video_view_count_unique_by_gender: "total_video_view_count_unique_by_gender";
        total_video_view_time_by_age_bucket_and_gender: "total_video_view_time_by_age_bucket_and_gender";
        total_video_view_time_by_country_id: "total_video_view_time_by_country_id";
        total_video_view_time_by_distribution_source: "total_video_view_time_by_distribution_source";
        total_video_view_time_by_distribution_type: "total_video_view_time_by_distribution_type";
        total_video_view_time_by_is_60s_returning_viewer_and_time_since_creation_bucket: "total_video_view_time_by_is_60s_returning_viewer_and_time_since_creation_bucket";
        total_video_view_time_by_region_id: "total_video_view_time_by_region_id";
        total_video_view_time_by_time_since_creation_bucket: "total_video_view_time_by_time_since_creation_bucket";
        total_video_view_total_time: "total_video_view_total_time";
        total_video_view_total_time_by_is_60s_returning_viewer: "total_video_view_total_time_by_is_60s_returning_viewer";
        total_video_view_total_time_by_paid_non_paid: "total_video_view_total_time_by_paid_non_paid";
        total_video_view_total_time_live: "total_video_view_total_time_live";
        total_video_view_total_time_organic: "total_video_view_total_time_organic";
        total_video_view_total_time_paid: "total_video_view_total_time_paid";
        total_video_view_total_time_vod: "total_video_view_total_time_vod";
        total_video_views: "total_video_views";
        total_video_views_autoplayed: "total_video_views_autoplayed";
        total_video_views_by_age_bucket_and_gender: "total_video_views_by_age_bucket_and_gender";
        total_video_views_by_country_id: "total_video_views_by_country_id";
        total_video_views_by_distribution_type: "total_video_views_by_distribution_type";
        total_video_views_by_paid_non_paid: "total_video_views_by_paid_non_paid";
        total_video_views_by_region_id: "total_video_views_by_region_id";
        total_video_views_by_region_id_proper: "total_video_views_by_region_id_proper";
        total_video_views_clicked_to_play: "total_video_views_clicked_to_play";
        total_video_views_gender_female: "total_video_views_gender_female";
        total_video_views_gender_female_live: "total_video_views_gender_female_live";
        total_video_views_gender_male: "total_video_views_gender_male";
        total_video_views_gender_male_live: "total_video_views_gender_male_live";
        total_video_views_live: "total_video_views_live";
        total_video_views_live_autoplayed: "total_video_views_live_autoplayed";
        total_video_views_live_clicked_to_play: "total_video_views_live_clicked_to_play";
        total_video_views_organic: "total_video_views_organic";
        total_video_views_organic_unique: "total_video_views_organic_unique";
        total_video_views_paid: "total_video_views_paid";
        total_video_views_paid_unique: "total_video_views_paid_unique";
        total_video_views_sound_on: "total_video_views_sound_on";
        total_video_views_unique: "total_video_views_unique";
        total_video_views_vod: "total_video_views_vod";
        video_asset_60s_video_view_total_count_by_is_monetizable: "video_asset_60s_video_view_total_count_by_is_monetizable";
    }>;
}