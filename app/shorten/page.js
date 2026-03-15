"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import Link from "next/link"

const Shorten = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const [generated, setGenerated] = useState(false);
    const [shortName, setShortName] = useState("");

    const onSubmit = async (data) => {
        const response = await fetch("/api/check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if(result.success === false){
            alert(result.message);
        }
        else{
            setShortName(`${process.env.NEXT_PUBLIC_URL_PREFIX}${data.shortURL}`);
            setGenerated(true);
            reset();
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-6">

            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">

                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Create Short URL
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    {/* Long URL */}
                    <div>
                        <label className="text-sm text-gray-600">
                            Enter Long URL
                        </label>

                        <input
                            type="url"
                            placeholder="https://example.com"
                            {...register("longURL", {
                                required: "URL is required"
                            })}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />

                        {errors.longURL && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.longURL.message}
                            </p>
                        )}
                    </div>

                    {/* Short Name */}
                    <div>
                        <label className="text-sm text-gray-600">
                            Custom Short Name
                        </label>

                        <input
                            type="text"
                            placeholder="my-link"
                            {...register("shortURL", {
                                required: "Short name is required"
                            })}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />

                        {errors.shortURL && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.shortURL.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        {isSubmitting ? "Generating..." : "Generate Short URL"}
                    </button>

                </form>

                {/* Generated Link */}
                {generated && (
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">

                        <p className="text-sm text-gray-600 mb-2">
                            Your Short URL
                        </p>

                        <Link
                            href={shortName}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 font-medium hover:underline break-all"
                        >
                            {shortName}
                        </Link>

                    </div>
                )}

            </div>

        </div>
    )
}

export default Shorten