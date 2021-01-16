<DASH 
  id={'string'}
  className={'string'}
  controls={true} // default true
  url={'string'} // rename to src
  autoplay={true} // default false
  options={{
    debug: {
        logLevel: Debug.LOG_LEVEL_WARNING,
        dispatchEvent: false
    },
    streaming: {
        metricsMaxListDepth: 1000,
        abandonLoadTimeout: 10000,
        liveDelayFragmentCount: NaN,
        liveDelay: null,
        scheduleWhilePaused: true,
        fastSwitchEnabled: false,
        flushBufferAtTrackSwitch: false,
        calcSegmentAvailabilityRangeFromTimeline: false,
        reuseExistingSourceBuffers: true,
        bufferPruningInterval: 10,
        bufferToKeep: 20,
        jumpGaps: true,
        jumpLargeGaps: true,
        smallGapLimit: 1.5,
        stableBufferTime: 12,
        bufferTimeAtTopQuality: 30,
        bufferTimeAtTopQualityLongForm: 60,
        longFormContentDurationThreshold: 600,
        wallclockTimeUpdateInterval: 50,
        lowLatencyEnabled: false,
        keepProtectionMediaKeys: false,
        useManifestDateHeaderTimeSource: true,
        useSuggestedPresentationDelay: true,
        useAppendWindow: true,
        manifestUpdateRetryInterval: 100,
        liveCatchup: {
            minDrift: 0.02,
            maxDrift: 0,
            playbackRate: 0.5,
            latencyThreshold: NaN,
            playbackBufferMin: NaN,
            enabled: false,
            mode: Constants.LIVE_CATCHUP_MODE_DEFAULT
          },
        lastBitrateCachingInfo: { enabled: true, ttl: 360000 },
        lastMediaSettingsCachingInfo: { enabled: true, ttl: 360000 },
        cacheLoadThresholds: { video: 50, audio: 5 },
        fragmentRequestTimeout: 0,
        retryIntervals: {
            MPD: 500,
            XLinkExpansion: 500,
            InitializationSegment: 1000,
            IndexSegment: 1000,
            MediaSegment: 1000,
            BitstreamSwitchingSegment: 1000,
            other: 1000,
            lowLatencyReductionFactor: 10
        },
        retryAttempts: {
            MPD: 3,
            XLinkExpansion: 1,
            InitializationSegment: 3,
            IndexSegment: 3,
            MediaSegment: 3,
            BitstreamSwitchingSegment: 3,
            other: 3,
            lowLatencyMultiplyFactor: 5
        },
        abr: {
            movingAverageMethod: Constants.MOVING_AVERAGE_SLIDING_WINDOW,
            ABRStrategy: Constants.ABR_STRATEGY_DYNAMIC,
            bandwidthSafetyFactor: 0.9,
            useDefaultABRRules: true,
            useBufferOccupancyABR: false,
            useDeadTimeLatency: true,
            limitBitrateByPortal: false,
            usePixelRatioInLimitBitrateByPortal: false,
            maxBitrate: { audio: -1, video: -1 },
            minBitrate: { audio: -1, video: -1 },
            maxRepresentationRatio: { audio: 1, video: 1 },
            initialBitrate: { audio: -1, video: -1 },
            initialRepresentationRatio: { audio: -1, video: -1 },
            autoSwitchBitrate: { audio: true, video: true },
            fetchThroughputCalculationMode: Constants.ABR_FETCH_THROUGHPUT_CALCULATION_DOWNLOADED_DATA
        },
        cmcd: {
            enabled: false,
            sid: null,
            cid: null,
            did: null
        }
    }
  }}
  onData={function}
  onDataConfig={{
    interval: 200,
    type: 'string' // not sure on this
    projection: { /* mapStateToParameter */}
  }}
  akamai={false} // use Akamai control bar, conflict with controls
  subtitles={{}} // complimentary Subtitles component
/>

