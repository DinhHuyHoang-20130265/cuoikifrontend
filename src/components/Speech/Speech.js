import React, {useState, useEffect} from "react";
import "./style.css";

const Speech = ({text}) => {
    const [isPaused, setIsPaused] = useState(false);
    const [speech, setSpeech] = useState(null);
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [volume, setVolume] = useState(1);

    const synth = window.speechSynthesis;
    const voices = synth.getVoices();

    useEffect(() => {
        const u = new SpeechSynthesisUtterance(text);
        setSpeech(u);
        return () => {
            synth.cancel();
        };
    }, [text, synth]);
    const handlePlay = () => {
        if (isPaused)
            synth.resume();
        else {
            speech.voice = voices[303];
            speech.pitch = pitch;
            speech.rate = rate;
            speech.volume = volume;
            synth.speak(speech);
        }
        setIsPaused(false);
    };
    const handlePause = () => {
        synth.pause();
        setIsPaused(true);
    };
    const handleStop = () => {
        synth.cancel();
        setIsPaused(false);
    };
    const handlePitchChange = (e) => {
        setPitch(parseFloat(e.target.value));
    };
    const handleRateChange = (e) => {
        setRate(parseFloat(e.target.value));
    };
    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    return (
        <div className={"container-speech"}>
            <label>
                <table>
                    <tbody>
                    <tr>
                        <td>Tông giọng:</td>
                        <td><input
                            type="range"
                            min="0.5"
                            max="2"
                            step="0.1"
                            value={pitch}
                            onChange={handlePitchChange}
                        /></td>
                    </tr>
                    <tr>
                        <td>Tốc độ đọc:</td>
                        <td><input
                            type="range"
                            min="0.5"
                            max="2"
                            step="0.1"
                            value={rate}
                            onChange={handleRateChange}
                        /></td>
                    </tr>

                    <tr>
                        <td> Âm lượng:
                        </td>
                        <td><input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={handleVolumeChange}
                        /></td>
                    </tr>
                    </tbody>
                </table>
            </label>
            <div className={"btn-container d-flex justify-content-sm-around"}>
                <button onClick={handlePlay}>{isPaused ? "Tiếp tục" : "Đọc"}</button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleStop}>Stop</button>
            </div>
        </div>
    );
};

export default Speech;